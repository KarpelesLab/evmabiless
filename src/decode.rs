//! Calldata decoding (`decode` feature).
//!
//! Decoding happens in two steps. [`decode_calldata`] (or
//! [`Abi::decode_input`]) first validates the whole calldata against the ABI
//! and reports the first problem as a [`DecodeError`]. Once that succeeds,
//! the returned [`Params`] iterator walks the arguments as zero-copy
//! [`Value`]s borrowing from the calldata. Iteration cannot fail, and can be
//! restarted by cloning the iterator, for example to page through the
//! arguments on a small display.

use core::fmt;
use core::slice;

use crate::{Abi, AbiIO, AbiType, MethodPrefix, lookup_abi};

const WORD: usize = 32;

/// Maximum nesting of arrays and tuples accepted by the decoder.
pub const MAX_DEPTH: usize = 16;

/// How strictly calldata must follow the canonical ABI encoding.
///
/// Values themselves are always checked in both modes: dirty padding in an
/// `address`, `uintN`, `intN` or `bytesN` word, a `bool` other than 0 or 1, and
/// a `string` that is not UTF-8 are errors. Solidity's own decoder rejects the
/// first two as well, so showing a value it would not accept would be
/// misleading.
#[derive(Clone, Copy, Debug, Default, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub enum DecodeMode {
    /// Only accept the canonical encoding, as produced by Solidity and every
    /// mainstream encoder: dynamic data laid out in order right after the
    /// heads, zero padding after `bytes`/`string` data, no trailing bytes.
    /// Every byte of valid calldata then has exactly one meaning.
    #[default]
    Strict,
    /// Also accept offsets pointing anywhere in bounds (including shared or
    /// out-of-order data), non-zero padding after `bytes`/`string` data, and
    /// trailing bytes after the arguments. The amount of work is still
    /// bounded, see [`DecodeErrorKind::TooComplex`].
    Lenient,
}

/// Error returned when calldata cannot be decoded.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub struct DecodeError {
    kind: DecodeErrorKind,
    position: usize,
}

impl DecodeError {
    const fn new(kind: DecodeErrorKind, position: usize) -> Self {
        DecodeError { kind, position }
    }

    /// What went wrong.
    pub const fn kind(&self) -> DecodeErrorKind {
        self.kind
    }

    /// Byte offset in the calldata (selector included) where the problem was
    /// found.
    pub const fn position(&self) -> usize {
        self.position
    }
}

impl fmt::Display for DecodeError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{} at byte {}", self.kind, self.position)
    }
}

impl core::error::Error for DecodeError {}

/// The kind of a [`DecodeError`].
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub enum DecodeErrorKind {
    /// The calldata is shorter than the 4-byte selector.
    TooShort,
    /// The selector is not in the built-in table.
    UnknownSelector,
    /// The selector does not match the ABI it is being decoded with.
    SelectorMismatch,
    /// The ABI entry is not a function ([`decode_calldata`]) or neither a
    /// function nor an error ([`Abi::decode_input`]), so it has no calldata.
    NotCallable,
    /// The calldata ends before a value does.
    Truncated,
    /// An offset does not fit in the calldata.
    OffsetOutOfBounds,
    /// An offset is in bounds, but not where the canonical encoding puts the
    /// data ([`DecodeMode::Strict`] only).
    NonCanonicalOffset,
    /// A length is larger than the calldata.
    InvalidLength,
    /// Non-zero padding: bits outside a `uintN`, `address`, `bytesN` or
    /// `function` value, an `intN` that is not sign-extended, or (in
    /// [`DecodeMode::Strict`]) bytes after `bytes`/`string` data.
    DirtyPadding,
    /// A `bool` that is neither 0 nor 1.
    InvalidBool,
    /// A `string` that is not valid UTF-8.
    InvalidUtf8,
    /// Bytes remain after the last argument ([`DecodeMode::Strict`] only).
    TrailingData,
    /// Decoding would visit more values than the calldata can hold in
    /// canonical form. Only reachable in [`DecodeMode::Lenient`], with offsets
    /// crafted to make the same data be read many times.
    TooComplex,
    /// Arrays and tuples are nested deeper than [`MAX_DEPTH`].
    TooDeep,
    /// The ABI uses a type this decoder does not support (`fixed`/`ufixed`)
    /// or does not understand.
    UnsupportedType,
}

impl fmt::Display for DecodeErrorKind {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(match self {
            DecodeErrorKind::TooShort => "calldata shorter than a selector",
            DecodeErrorKind::UnknownSelector => "unknown selector",
            DecodeErrorKind::SelectorMismatch => "selector does not match the ABI",
            DecodeErrorKind::NotCallable => "ABI entry cannot be called",
            DecodeErrorKind::Truncated => "calldata truncated",
            DecodeErrorKind::OffsetOutOfBounds => "offset out of bounds",
            DecodeErrorKind::NonCanonicalOffset => "non-canonical offset",
            DecodeErrorKind::InvalidLength => "invalid length",
            DecodeErrorKind::DirtyPadding => "non-zero padding",
            DecodeErrorKind::InvalidBool => "invalid bool",
            DecodeErrorKind::InvalidUtf8 => "invalid UTF-8 in string",
            DecodeErrorKind::TrailingData => "trailing data after arguments",
            DecodeErrorKind::TooComplex => "calldata too complex",
            DecodeErrorKind::TooDeep => "types nested too deep",
            DecodeErrorKind::UnsupportedType => "unsupported ABI type",
        })
    }
}

/// A decoded function call, returned by [`decode_calldata`].
#[derive(Clone, Debug)]
#[non_exhaustive]
pub struct Call<'a> {
    /// The function being called.
    pub abi: &'static Abi,
    /// The arguments. Clone the iterator to walk them more than once.
    pub params: Params<'a>,
}

/// Looks up the function called by `calldata` in the built-in table and
/// decodes its arguments, rejecting non-canonical encodings.
///
/// Selectors are only 4 bytes, so a known selector is a strong hint rather
/// than proof of which function the caller meant; the full validation of the
/// arguments against that ABI is what makes the result trustworthy.
///
/// ```
/// use evmabiless::decode_calldata;
///
/// // transfer(0x00000000000000000000000000000000000000ff, 1000)
/// let mut calldata = [0u8; 68];
/// calldata[..4].copy_from_slice(&[0xa9, 0x05, 0x9c, 0xbb]);
/// calldata[35] = 0xff;
/// calldata[66..].copy_from_slice(&1000u16.to_be_bytes());
///
/// let call = decode_calldata(&calldata).unwrap();
/// assert_eq!(call.abi.name, "transfer");
/// for param in call.params {
///     // to: 0x00000000000000000000000000000000000000ff
///     // value: 1000
///     println!("{}: {}", param.io.name, param.value);
/// }
/// ```
pub fn decode_calldata(calldata: &[u8]) -> Result<Call<'_>, DecodeError> {
    decode_calldata_with(calldata, DecodeMode::Strict)
}

/// Like [`decode_calldata`], with an explicit [`DecodeMode`].
pub fn decode_calldata_with(calldata: &[u8], mode: DecodeMode) -> Result<Call<'_>, DecodeError> {
    let selector = MethodPrefix::from_calldata(calldata)
        .ok_or(DecodeError::new(DecodeErrorKind::TooShort, 0))?;
    let abi = lookup_abi(selector).ok_or(DecodeError::new(DecodeErrorKind::UnknownSelector, 0))?;
    if abi.kind != AbiType::Function {
        return Err(DecodeError::new(DecodeErrorKind::NotCallable, 0));
    }
    Ok(Call {
        abi,
        params: abi.decode_input_with(calldata, mode)?,
    })
}

impl Abi {
    /// Decodes `calldata` (selector included) as a call to this function,
    /// rejecting non-canonical encodings. Also decodes revert data for an
    /// [`AbiType::Error`].
    pub fn decode_input<'a>(&self, calldata: &'a [u8]) -> Result<Params<'a>, DecodeError> {
        self.decode_input_with(calldata, DecodeMode::Strict)
    }

    /// Like [`decode_input`](Self::decode_input), with an explicit
    /// [`DecodeMode`].
    pub fn decode_input_with<'a>(
        &self,
        calldata: &'a [u8],
        mode: DecodeMode,
    ) -> Result<Params<'a>, DecodeError> {
        if !matches!(self.kind, AbiType::Function | AbiType::Error) {
            return Err(DecodeError::new(DecodeErrorKind::NotCallable, 0));
        }
        let selector = MethodPrefix::from_calldata(calldata)
            .ok_or(DecodeError::new(DecodeErrorKind::TooShort, 0))?;
        if selector != self.selector {
            return Err(DecodeError::new(DecodeErrorKind::SelectorMismatch, 0));
        }

        // Reject unsupported or too deeply nested types whatever the data,
        // so the result does not depend on e.g. an array being empty.
        for io in self.inputs {
            let ty = Ty::of(io);
            ty.check(1)
                .and_then(|()| ty.head_size(1))
                .map_err(|kind| DecodeError::new(kind, 0))?;
        }

        let mut validator = Validator {
            data: calldata,
            strict: mode == DecodeMode::Strict,
            // In canonical form every visited value owns a distinct 32-byte
            // word, or is one of at most MAX_DEPTH + 1 arrays/tuples whose
            // first element owns it, so this is never exceeded in strict
            // mode. In lenient mode it caps the work shared offsets can cause.
            budget: (calldata.len() / WORD + 1).saturating_mul(MAX_DEPTH + 2),
        };
        let end = validator.sequence(Members::Fields(self.inputs), 4, 0)?;
        if validator.strict && end != calldata.len() {
            return Err(DecodeError::new(DecodeErrorKind::TrailingData, end));
        }

        Ok(Params {
            reader: Reader { data: calldata },
            fields: self.inputs.iter(),
            base: 4,
            head: 4,
        })
    }
}

/// A decoded argument (or tuple member) and its ABI description.
#[derive(Clone, Debug)]
#[non_exhaustive]
pub struct Param<'a> {
    /// Name and type of the argument.
    pub io: &'static AbiIO,
    /// The decoded value.
    pub value: Value<'a>,
}

/// A decoded value, borrowing from the calldata.
///
/// [`Display`](fmt::Display) renders integers in decimal, addresses and byte
/// strings as `0x`-prefixed lowercase hex, strings quoted with control and
/// special characters escaped, arrays as `[a, b]` and tuples as `(a, b)`.
#[derive(Clone, Debug)]
#[non_exhaustive]
pub enum Value<'a> {
    /// `uint8` … `uint256`.
    Uint(Uint<'a>),
    /// `int8` … `int256`.
    Int(Int<'a>),
    /// `address`.
    Address(Address<'a>),
    /// `bool`.
    Bool(bool),
    /// `bytes1` … `bytes32`.
    FixedBytes(&'a [u8]),
    /// `function`: an address followed by a selector.
    Function(Address<'a>, MethodPrefix),
    /// `bytes`.
    Bytes(&'a [u8]),
    /// `string`.
    String(&'a str),
    /// `T[]` or `T[k]`.
    Array(Array<'a>),
    /// `tuple` (a struct).
    Tuple(Params<'a>),
}

impl fmt::Display for Value<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Value::Uint(v) => fmt::Display::fmt(v, f),
            Value::Int(v) => fmt::Display::fmt(v, f),
            Value::Address(v) => fmt::Display::fmt(v, f),
            Value::Bool(v) => fmt::Display::fmt(v, f),
            Value::FixedBytes(v) | Value::Bytes(v) => write_hex(f, v),
            Value::Function(address, selector) => write!(f, "{address}{selector}"),
            Value::String(v) => write!(f, "{v:?}"),
            Value::Array(v) => {
                f.write_str("[")?;
                for (i, value) in v.clone().enumerate() {
                    if i > 0 {
                        f.write_str(", ")?;
                    }
                    fmt::Display::fmt(&value, f)?;
                }
                f.write_str("]")
            }
            Value::Tuple(v) => {
                f.write_str("(")?;
                for (i, param) in v.clone().enumerate() {
                    if i > 0 {
                        f.write_str(", ")?;
                    }
                    fmt::Display::fmt(&param.value, f)?;
                }
                f.write_str(")")
            }
        }
    }
}

/// Iterator over decoded arguments or tuple members.
#[derive(Clone)]
pub struct Params<'a> {
    reader: Reader<'a>,
    fields: slice::Iter<'static, AbiIO>,
    base: usize,
    head: usize,
}

impl<'a> Iterator for Params<'a> {
    type Item = Param<'a>;

    fn next(&mut self) -> Option<Param<'a>> {
        let io = self.fields.next()?;
        let ty = Ty::of(io);
        let value = self.reader.at_head(ty, self.base, self.head)?;
        self.head = self.head.checked_add(ty.head_size(0).ok()?)?;
        Some(Param { io, value })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.fields.size_hint()
    }
}

impl ExactSizeIterator for Params<'_> {}

impl fmt::Debug for Params<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_list().entries(self.clone()).finish()
    }
}

/// Iterator over the elements of a decoded array.
#[derive(Clone)]
pub struct Array<'a> {
    reader: Reader<'a>,
    elem: Ty,
    base: usize,
    head: usize,
    remaining: usize,
}

impl Array<'_> {
    /// The element type, e.g. `"uint256"` for a `uint256[]`, or `"tuple"`.
    pub fn elem_type(&self) -> &'static str {
        self.elem.s
    }

    /// The members of the element type when it is a `tuple`, empty
    /// otherwise.
    pub fn elem_components(&self) -> &'static [AbiIO] {
        self.elem.components
    }
}

impl<'a> Iterator for Array<'a> {
    type Item = Value<'a>;

    fn next(&mut self) -> Option<Value<'a>> {
        if self.remaining == 0 {
            return None;
        }
        self.remaining -= 1;
        let value = self.reader.at_head(self.elem, self.base, self.head)?;
        self.head = self.head.checked_add(self.elem.head_size(0).ok()?)?;
        Some(value)
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        (self.remaining, Some(self.remaining))
    }
}

impl ExactSizeIterator for Array<'_> {}

impl fmt::Debug for Array<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_list().entries(self.clone()).finish()
    }
}

/// A decoded unsigned integer, displayed in decimal.
#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct Uint<'a>(&'a [u8; WORD]);

impl<'a> Uint<'a> {
    /// The value as a 32-byte big-endian word.
    pub fn as_word(&self) -> &'a [u8; WORD] {
        self.0
    }

    /// The value, if it fits in a `u64`.
    pub fn to_u64(&self) -> Option<u64> {
        let (high, low) = self.0.split_at(WORD - 8);
        high.iter()
            .all(|&b| b == 0)
            .then(|| u64::from_be_bytes(low.try_into().unwrap_or_default()))
    }

    /// The value, if it fits in a `u128`.
    pub fn to_u128(&self) -> Option<u128> {
        let (high, low) = self.0.split_at(WORD - 16);
        high.iter()
            .all(|&b| b == 0)
            .then(|| u128::from_be_bytes(low.try_into().unwrap_or_default()))
    }
}

impl fmt::Display for Uint<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt_decimal(f, true, *self.0)
    }
}

impl fmt::Debug for Uint<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Display::fmt(self, f)
    }
}

/// A decoded signed integer, displayed in decimal.
#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct Int<'a>(&'a [u8; WORD]);

impl<'a> Int<'a> {
    /// The value as a 32-byte big-endian two's complement word.
    pub fn as_word(&self) -> &'a [u8; WORD] {
        self.0
    }

    /// Whether the value is negative.
    pub fn is_negative(&self) -> bool {
        self.0[0] & 0x80 != 0
    }

    /// The value, if it fits in an `i128`.
    pub fn to_i128(&self) -> Option<i128> {
        let (high, low) = self.0.split_at(WORD - 16);
        let low = i128::from_be_bytes(low.try_into().unwrap_or_default());
        let fill = if low < 0 { 0xff } else { 0 };
        high.iter().all(|&b| b == fill).then_some(low)
    }
}

impl fmt::Display for Int<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let mut magnitude = *self.0;
        if self.is_negative() {
            // Two's complement negation; -2^255 correctly becomes 2^255.
            let mut carry = true;
            for b in magnitude.iter_mut().rev() {
                let (v, c) = (!*b).overflowing_add(carry as u8);
                *b = v;
                carry = c;
            }
        }
        fmt_decimal(f, !self.is_negative(), magnitude)
    }
}

impl fmt::Debug for Int<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Display::fmt(self, f)
    }
}

/// A decoded address, displayed as `0x` followed by 40 lowercase hex digits
/// (no EIP-55 checksum, which needs keccak256).
#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct Address<'a>(&'a [u8; 20]);

impl<'a> Address<'a> {
    /// The 20 address bytes.
    pub fn as_bytes(&self) -> &'a [u8; 20] {
        self.0
    }
}

impl fmt::Display for Address<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write_hex(f, self.0)
    }
}

impl fmt::Debug for Address<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Display::fmt(self, f)
    }
}

fn write_hex(f: &mut fmt::Formatter<'_>, bytes: &[u8]) -> fmt::Result {
    f.write_str("0x")?;
    for b in bytes {
        write!(f, "{b:02x}")?;
    }
    Ok(())
}

/// Formats a 256-bit big-endian magnitude in decimal, honoring width, fill
/// and sign flags.
fn fmt_decimal(f: &mut fmt::Formatter<'_>, non_negative: bool, word: [u8; WORD]) -> fmt::Result {
    const CHUNK: u64 = 10_000_000_000_000_000_000; // 10^19, the largest power of 10 in a u64
    let mut limbs = [0u64; 4];
    for (limb, bytes) in limbs.iter_mut().zip(word.chunks_exact(8)) {
        *limb = u64::from_be_bytes(bytes.try_into().unwrap_or_default());
    }
    // 2^256 has 78 decimal digits.
    let mut buf = [b'0'; 78];
    let mut start = buf.len();
    loop {
        // limbs /= 10^19, keeping the remainder.
        let mut rem = 0u128;
        for limb in limbs.iter_mut() {
            let cur = (rem << 64) | u128::from(*limb);
            *limb = (cur / u128::from(CHUNK)) as u64;
            rem = cur % u128::from(CHUNK);
        }
        let mut rem = rem as u64;
        let done = limbs.iter().all(|&l| l == 0);
        // Emit all 19 digits of inner chunks, only the significant ones of
        // the leading chunk.
        for _ in 0..19 {
            if done && rem == 0 && start < buf.len() {
                break;
            }
            start -= 1;
            buf[start] = b'0' + (rem % 10) as u8;
            rem /= 10;
        }
        if done {
            break;
        }
    }
    let digits = core::str::from_utf8(&buf[start..]).unwrap_or("?");
    f.pad_integral(non_negative, "", digits)
}

/// An ABI type: its type string and, for tuples, its components.
#[derive(Clone, Copy, Debug)]
struct Ty {
    s: &'static str,
    components: &'static [AbiIO],
}

#[derive(Clone, Copy)]
enum Kind {
    Uint(usize),
    Int(usize),
    Address,
    Bool,
    FixedBytes(usize),
    Function,
    Bytes,
    String,
    Tuple,
    Array { elem: Ty, len: Option<usize> },
}

impl Ty {
    fn of(io: &'static AbiIO) -> Ty {
        Ty {
            s: io.ty,
            components: io.components,
        }
    }

    fn kind(self) -> Result<Kind, DecodeErrorKind> {
        use DecodeErrorKind::UnsupportedType;
        if let Some(inner) = self.s.strip_suffix(']') {
            // The last [..] is the outermost array: `uint8[2][]` is a
            // dynamic array of `uint8[2]`.
            let open = inner.rfind('[').ok_or(UnsupportedType)?;
            let elem = Ty {
                s: &inner[..open],
                components: self.components,
            };
            let len = match &inner[open + 1..] {
                "" => None,
                // Zero-length static arrays are not valid Solidity and would
                // make an element take no space; reject them and any leading
                // zero or sign.
                n if n.starts_with(|c: char| c.is_ascii_digit() && c != '0') => {
                    Some(n.parse().map_err(|_| UnsupportedType)?)
                }
                _ => return Err(UnsupportedType),
            };
            return Ok(Kind::Array { elem, len });
        }
        Ok(match self.s {
            "address" => Kind::Address,
            "bool" => Kind::Bool,
            "function" => Kind::Function,
            "bytes" => Kind::Bytes,
            "string" => Kind::String,
            // An empty tuple would take no space; Solidity has no empty structs.
            "tuple" if !self.components.is_empty() => Kind::Tuple,
            s => {
                if let Some(bits) = s.strip_prefix("uint") {
                    Kind::Uint(int_bits(bits)?)
                } else if let Some(bits) = s.strip_prefix("int") {
                    Kind::Int(int_bits(bits)?)
                } else if let Some(n) = s.strip_prefix("bytes") {
                    match canonical_number(n) {
                        Some(n @ 1..=32) => Kind::FixedBytes(n),
                        _ => return Err(UnsupportedType),
                    }
                } else {
                    return Err(UnsupportedType);
                }
            }
        })
    }

    /// Checks that the type and all types nested in it are supported, and
    /// that values nested in it stay within [`MAX_DEPTH`] when this type is at
    /// `depth`.
    fn check(self, depth: usize) -> Result<(), DecodeErrorKind> {
        if depth > MAX_DEPTH {
            return Err(DecodeErrorKind::TooDeep);
        }
        match self.kind()? {
            Kind::Array { elem, .. } => elem.check(depth + 1),
            Kind::Tuple => self
                .components
                .iter()
                .try_for_each(|io| Ty::of(io).check(depth + 1)),
            _ => Ok(()),
        }
    }

    fn is_dynamic(self, depth: usize) -> Result<bool, DecodeErrorKind> {
        if depth > MAX_DEPTH {
            return Err(DecodeErrorKind::TooDeep);
        }
        Ok(match self.kind()? {
            Kind::Bytes | Kind::String | Kind::Array { len: None, .. } => true,
            Kind::Array { elem, .. } => elem.is_dynamic(depth + 1)?,
            Kind::Tuple => {
                for io in self.components {
                    if Ty::of(io).is_dynamic(depth + 1)? {
                        return Ok(true);
                    }
                }
                false
            }
            _ => false,
        })
    }

    /// Size of the value in the head of its enclosing tuple or array: an
    /// offset word for dynamic types, the whole encoding for static ones.
    /// Always at least one word.
    fn head_size(self, depth: usize) -> Result<usize, DecodeErrorKind> {
        if self.is_dynamic(depth)? {
            return Ok(WORD);
        }
        self.static_size(depth)
    }

    fn static_size(self, depth: usize) -> Result<usize, DecodeErrorKind> {
        if depth > MAX_DEPTH {
            return Err(DecodeErrorKind::TooDeep);
        }
        let overflow = DecodeErrorKind::UnsupportedType;
        Ok(match self.kind()? {
            Kind::Array { elem, len: Some(n) } => n
                .checked_mul(elem.static_size(depth + 1)?)
                .ok_or(overflow)?,
            Kind::Tuple => {
                let mut size = 0usize;
                for io in self.components {
                    size = size
                        .checked_add(Ty::of(io).static_size(depth + 1)?)
                        .ok_or(overflow)?;
                }
                size
            }
            _ => WORD,
        })
    }
}

/// Parses the bit size of `uintN`/`intN`.
fn int_bits(s: &str) -> Result<usize, DecodeErrorKind> {
    match canonical_number(s) {
        Some(n) if n % 8 == 0 && (8..=256).contains(&n) => Ok(n),
        _ => Err(DecodeErrorKind::UnsupportedType),
    }
}

/// Parses a decimal number with no sign and no leading zero.
fn canonical_number(s: &str) -> Option<usize> {
    if s.starts_with(|c: char| c.is_ascii_digit() && c != '0') {
        s.parse().ok()
    } else {
        None
    }
}

/// The members of a tuple, or the elements of an array.
#[derive(Clone, Copy)]
enum Members {
    Fields(&'static [AbiIO]),
    Repeat(Ty, usize),
}

impl Members {
    fn len(self) -> usize {
        match self {
            Members::Fields(fields) => fields.len(),
            Members::Repeat(_, n) => n,
        }
    }

    fn get(self, i: usize) -> Option<Ty> {
        match self {
            Members::Fields(fields) => fields.get(i).map(Ty::of),
            Members::Repeat(ty, n) => (i < n).then_some(ty),
        }
    }

    fn heads_size(self, depth: usize) -> Result<usize, DecodeErrorKind> {
        let overflow = DecodeErrorKind::InvalidLength;
        match self {
            Members::Fields(fields) => {
                let mut size = 0usize;
                for io in fields {
                    size = size
                        .checked_add(Ty::of(io).head_size(depth)?)
                        .ok_or(overflow)?;
                }
                Ok(size)
            }
            // Computed without iterating: `n` comes from the calldata.
            Members::Repeat(ty, n) => n.checked_mul(ty.head_size(depth)?).ok_or(overflow),
        }
    }
}

/// First pass: checks everything, so that [`Reader`] cannot fail.
struct Validator<'a> {
    data: &'a [u8],
    strict: bool,
    budget: usize,
}

impl<'a> Validator<'a> {
    fn word(&self, pos: usize) -> Result<&'a [u8; WORD], DecodeError> {
        pos.checked_add(WORD)
            .and_then(|end| self.data.get(pos..end))
            .and_then(|w| w.try_into().ok())
            .ok_or(DecodeError::new(DecodeErrorKind::Truncated, pos))
    }

    /// Reads a word holding an offset or length that must fit in the
    /// calldata.
    fn usize_at(&self, pos: usize, kind: DecodeErrorKind) -> Result<usize, DecodeError> {
        let w = self.word(pos)?;
        word_to_usize(w)
            .filter(|&n| n <= self.data.len())
            .ok_or(DecodeError::new(kind, pos))
    }

    /// Validates the value of type `ty` encoded at `pos`, returning the end
    /// of its encoding (for dynamic types, including their tail).
    fn value(&mut self, ty: Ty, pos: usize, depth: usize) -> Result<usize, DecodeError> {
        let err = |kind| DecodeError::new(kind, pos);
        self.budget = self
            .budget
            .checked_sub(1)
            .ok_or(err(DecodeErrorKind::TooComplex))?;
        if depth > MAX_DEPTH {
            return Err(err(DecodeErrorKind::TooDeep));
        }
        match ty.kind().map_err(err)? {
            kind @ (Kind::Bytes | Kind::String) => {
                let len = self.usize_at(pos, DecodeErrorKind::InvalidLength)?;
                // Both fit: usize_at read a whole word at `pos`, and `len`
                // is at most the calldata length.
                let start = pos + WORD;
                let end = start + len;
                let padded_end = start + len.div_ceil(WORD) * WORD;
                let bytes = self
                    .data
                    .get(start..end)
                    .ok_or(DecodeError::new(DecodeErrorKind::Truncated, start))?;
                let padding = self
                    .data
                    .get(end..padded_end)
                    .ok_or(DecodeError::new(DecodeErrorKind::Truncated, end))?;
                if self.strict && padding.iter().any(|&b| b != 0) {
                    return Err(DecodeError::new(DecodeErrorKind::DirtyPadding, end));
                }
                if matches!(kind, Kind::String) && core::str::from_utf8(bytes).is_err() {
                    return Err(DecodeError::new(DecodeErrorKind::InvalidUtf8, start));
                }
                Ok(padded_end)
            }
            Kind::Array { elem, len: Some(n) } => {
                self.sequence(Members::Repeat(elem, n), pos, depth)
            }
            Kind::Array { elem, len: None } => {
                let n = self.usize_at(pos, DecodeErrorKind::InvalidLength)?;
                self.sequence(Members::Repeat(elem, n), pos + WORD, depth)
            }
            Kind::Tuple => self.sequence(Members::Fields(ty.components), pos, depth),
            kind => {
                check_word(kind, self.word(pos)?).map_err(err)?;
                Ok(pos + WORD)
            }
        }
    }

    /// Validates a tuple or array body starting at `base`: the heads, then
    /// the tails of dynamic members. Returns the end of the encoding.
    fn sequence(
        &mut self,
        members: Members,
        base: usize,
        depth: usize,
    ) -> Result<usize, DecodeError> {
        let err = |kind| DecodeError::new(kind, base);
        let heads = members.heads_size(depth + 1).map_err(err)?;
        // Bounds the loop below: every head is at least one word, so a huge
        // array length read from the calldata fails here.
        let heads_end = base
            .checked_add(heads)
            .filter(|&end| end <= self.data.len())
            .ok_or(err(DecodeErrorKind::Truncated))?;

        let mut head = base;
        let mut tail = heads_end;
        let mut end = heads_end;
        for i in 0..members.len() {
            let ty = members
                .get(i)
                .ok_or(DecodeError::new(DecodeErrorKind::Truncated, head))?;
            let hs = ty
                .head_size(depth + 1)
                .map_err(|k| DecodeError::new(k, head))?;
            if ty
                .is_dynamic(depth + 1)
                .map_err(|k| DecodeError::new(k, head))?
            {
                let offset = self.usize_at(head, DecodeErrorKind::OffsetOutOfBounds)?;
                let target = base
                    .checked_add(offset)
                    .filter(|&t| t <= self.data.len())
                    .ok_or(DecodeError::new(DecodeErrorKind::OffsetOutOfBounds, head))?;
                if self.strict && target != tail {
                    return Err(DecodeError::new(DecodeErrorKind::NonCanonicalOffset, head));
                }
                tail = self.value(ty, target, depth + 1)?;
                end = end.max(tail);
            } else {
                self.value(ty, head, depth + 1)?;
            }
            head += hs;
        }
        Ok(end)
    }
}

/// Checks that a static elementary value is canonically encoded.
fn check_word(kind: Kind, w: &[u8; WORD]) -> Result<(), DecodeErrorKind> {
    let zero = |bytes: &[u8]| bytes.iter().all(|&b| b == 0);
    let ok = match kind {
        Kind::Uint(bits) => zero(&w[..WORD - bits / 8]),
        Kind::Int(bits) => {
            let k = WORD - bits / 8;
            let fill = if w[k % WORD] & 0x80 != 0 { 0xff } else { 0 };
            w[..k].iter().all(|&b| b == fill)
        }
        Kind::Address => zero(&w[..12]),
        Kind::Bool => {
            if !zero(&w[..WORD - 1]) || w[WORD - 1] > 1 {
                return Err(DecodeErrorKind::InvalidBool);
            }
            true
        }
        Kind::FixedBytes(n) => zero(&w[n..]),
        Kind::Function => zero(&w[24..]),
        _ => true,
    };
    if ok {
        Ok(())
    } else {
        Err(DecodeErrorKind::DirtyPadding)
    }
}

fn word_to_usize(w: &[u8; WORD]) -> Option<usize> {
    let (high, low) = w.split_at(WORD - 8);
    if high.iter().any(|&b| b != 0) {
        return None;
    }
    usize::try_from(u64::from_be_bytes(low.try_into().ok()?)).ok()
}

/// Second pass over already validated calldata. Every method returns
/// `Option` only to avoid panicking paths; none of them fail after a
/// successful validation.
#[derive(Clone, Copy)]
struct Reader<'a> {
    data: &'a [u8],
}

impl<'a> Reader<'a> {
    fn word(self, pos: usize) -> Option<&'a [u8; WORD]> {
        self.data.get(pos..pos.checked_add(WORD)?)?.try_into().ok()
    }

    fn usize_at(self, pos: usize) -> Option<usize> {
        word_to_usize(self.word(pos)?)
    }

    /// Reads the value whose head is at `head` in the tuple or array body
    /// starting at `base`.
    fn at_head(self, ty: Ty, base: usize, head: usize) -> Option<Value<'a>> {
        if ty.is_dynamic(0).ok()? {
            self.value(ty, base.checked_add(self.usize_at(head)?)?)
        } else {
            self.value(ty, head)
        }
    }

    fn value(self, ty: Ty, pos: usize) -> Option<Value<'a>> {
        Some(match ty.kind().ok()? {
            Kind::Uint(_) => Value::Uint(Uint(self.word(pos)?)),
            Kind::Int(_) => Value::Int(Int(self.word(pos)?)),
            Kind::Address => Value::Address(Address(self.word(pos)?[12..].try_into().ok()?)),
            Kind::Bool => Value::Bool(self.word(pos)?[WORD - 1] == 1),
            Kind::FixedBytes(n) => Value::FixedBytes(self.word(pos)?.get(..n)?),
            Kind::Function => {
                let w = self.word(pos)?;
                Value::Function(
                    Address(w[..20].try_into().ok()?),
                    MethodPrefix(w[20..24].try_into().ok()?),
                )
            }
            kind @ (Kind::Bytes | Kind::String) => {
                let len = self.usize_at(pos)?;
                let start = pos.checked_add(WORD)?;
                let bytes = self.data.get(start..start.checked_add(len)?)?;
                if matches!(kind, Kind::String) {
                    Value::String(core::str::from_utf8(bytes).ok()?)
                } else {
                    Value::Bytes(bytes)
                }
            }
            Kind::Array { elem, len } => {
                let (base, remaining) = match len {
                    Some(n) => (pos, n),
                    None => (pos.checked_add(WORD)?, self.usize_at(pos)?),
                };
                Value::Array(Array {
                    reader: self,
                    elem,
                    base,
                    head: base,
                    remaining,
                })
            }
            Kind::Tuple => Value::Tuple(Params {
                reader: self,
                fields: ty.components.iter(),
                base: pos,
                head: pos,
            }),
        })
    }
}

#[cfg(test)]
mod tests {
    extern crate std;
    use std::format;

    use super::*;

    fn word(v: &[u8]) -> [u8; WORD] {
        let mut w = [0u8; WORD];
        w[WORD - v.len()..].copy_from_slice(v);
        w
    }

    #[test]
    fn uint_display() {
        assert_eq!(format!("{}", Uint(&[0; WORD])), "0");
        assert_eq!(format!("{}", Uint(&word(&[1, 0]))), "256");
        assert_eq!(
            format!("{}", Uint(&word(&u64::MAX.to_be_bytes()))),
            "18446744073709551615"
        );
        // 10^19 exactly: the second chunk must keep its inner zeros.
        assert_eq!(
            format!(
                "{}",
                Uint(&word(&10_000_000_000_000_000_000u64.to_be_bytes()))
            ),
            "10000000000000000000"
        );
        assert_eq!(
            format!("{}", Uint(&[0xff; WORD])),
            "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        );
        assert_eq!(format!("{:>6}", Uint(&word(&[42]))), "    42");
    }

    #[test]
    fn int_display() {
        assert_eq!(format!("{}", Int(&[0xff; WORD])), "-1");
        assert_eq!(format!("{}", Int(&word(&[5]))), "5");
        let mut min = [0u8; WORD];
        min[0] = 0x80;
        assert_eq!(
            format!("{}", Int(&min)),
            "-57896044618658097711785492504343953926634992332820282019728792003956564819968"
        );
        let mut minus_256 = [0xff; WORD];
        minus_256[WORD - 1] = 0;
        assert_eq!(format!("{}", Int(&minus_256)), "-256");
        assert_eq!(Int(&minus_256).to_i128(), Some(-256));
        assert_eq!(Int(&min).to_i128(), None);
    }

    #[test]
    fn int_padding() {
        let neg = [0xff; WORD];
        assert!(check_word(Kind::Int(8), &neg).is_ok());
        // int8 -1 without sign extension.
        assert_eq!(
            check_word(Kind::Int(8), &word(&[0xff])),
            Err(DecodeErrorKind::DirtyPadding)
        );
        // int8 127 is fine, 128 does not fit.
        assert!(check_word(Kind::Int(8), &word(&[0x7f])).is_ok());
        assert_eq!(
            check_word(Kind::Int(8), &word(&[0x00, 0x80])),
            Err(DecodeErrorKind::DirtyPadding)
        );
        assert!(check_word(Kind::Int(256), &[0x80; WORD]).is_ok());
    }

    use std::vec::Vec;

    use crate::StateMutability;

    /// A function taking a single argument of type `ty`.
    fn abi_with_arg(ty: &'static str) -> Abi {
        let inputs: &'static [AbiIO] = std::boxed::Box::leak(std::boxed::Box::new([AbiIO {
            name: "x",
            ty,
            internal_type: ty,
            indexed: false,
            components: &[],
        }]));
        Abi {
            selector: MethodPrefix([1, 2, 3, 4]),
            name: "f",
            abi: "",
            compact: "",
            kind: AbiType::Function,
            state_mutability: Some(StateMutability::NonPayable),
            anonymous: false,
            inputs,
            outputs: &[],
        }
    }

    fn push_word(data: &mut Vec<u8>, v: usize) {
        data.extend_from_slice(&word(&(v as u64).to_be_bytes()));
    }

    /// Calldata for `uint256[][]...[]` (`levels` array levels) where every
    /// array has two elements and, from `shared_from` down, both elements'
    /// offsets point at the same child: 2^levels leaves from a few hundred
    /// bytes in lenient mode.
    fn nested(levels: usize) -> Vec<u8> {
        let mut data = std::vec![1, 2, 3, 4];
        push_word(&mut data, 32); // offset of the argument
        for _ in 1..levels {
            push_word(&mut data, 2); // length
            push_word(&mut data, 64); // both elements: the child right after
            push_word(&mut data, 64);
        }
        push_word(&mut data, 2);
        push_word(&mut data, 7);
        push_word(&mut data, 8);
        data
    }

    fn array_type(levels: usize) -> &'static str {
        let mut s = std::string::String::from("uint256");
        for _ in 0..levels {
            s.push_str("[]");
        }
        std::boxed::Box::leak(s.into_boxed_str())
    }

    #[test]
    fn shared_offsets_are_bounded() {
        let levels = MAX_DEPTH - 1;
        let abi = abi_with_arg(array_type(levels));
        let data = nested(levels);
        assert_eq!(
            abi.decode_input(&data).unwrap_err().kind(),
            DecodeErrorKind::NonCanonicalOffset
        );
        assert_eq!(
            abi.decode_input_with(&data, DecodeMode::Lenient)
                .unwrap_err()
                .kind(),
            DecodeErrorKind::TooComplex
        );

        // Two levels of sharing stay within the budget and decode.
        let abi = abi_with_arg(array_type(2));
        let data = nested(2);
        let params = abi.decode_input_with(&data, DecodeMode::Lenient).unwrap();
        let shown: Vec<_> = params.map(|p| format!("{}", p.value)).collect();
        assert_eq!(shown, ["[[7, 8], [7, 8]]"]);
    }

    #[test]
    fn nesting_limit() {
        // Leaves of MAX_DEPTH - 1 array levels sit at depth MAX_DEPTH.
        let abi = abi_with_arg(array_type(MAX_DEPTH - 1));
        let mut data = std::vec![1, 2, 3, 4];
        push_word(&mut data, 32);
        for _ in 1..MAX_DEPTH - 1 {
            push_word(&mut data, 1);
            push_word(&mut data, 32);
        }
        push_word(&mut data, 0);
        assert!(abi.decode_input(&data).is_ok());

        let abi = abi_with_arg(array_type(MAX_DEPTH));
        assert_eq!(
            abi.decode_input(&data).unwrap_err().kind(),
            DecodeErrorKind::TooDeep
        );
    }

    #[test]
    fn type_parsing() {
        let ty = |s| Ty { s, components: &[] };
        assert!(matches!(ty("uint256").kind(), Ok(Kind::Uint(256))));
        assert!(matches!(ty("int8").kind(), Ok(Kind::Int(8))));
        assert!(matches!(ty("bytes32").kind(), Ok(Kind::FixedBytes(32))));
        assert!(matches!(
            ty("uint8[2][]").kind(),
            Ok(Kind::Array {
                len: None,
                elem: Ty { s: "uint8[2]", .. }
            })
        ));
        assert_eq!(ty("uint8[2][3]").static_size(0), Ok(6 * WORD));
        for bad in [
            "uint7",
            "uint264",
            "uint",
            "uint08",
            "bytes0",
            "bytes33",
            "fixed128x18",
            "uint8[0]",
            "uint8[01]",
            "uint8[",
            "uint8]",
            "tuple",
            "foo",
        ] {
            assert!(ty(bad).kind().is_err(), "{bad}");
        }
    }
}
