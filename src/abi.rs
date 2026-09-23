use core::fmt;

use crate::MethodPrefix;
// The full table wins when both table features are enabled.
#[cfg(feature = "signatures")]
use crate::signatures::SIGNATURES;
#[cfg(all(feature = "common-signatures", not(feature = "signatures")))]
use crate::signatures_common::SIGNATURES;

/// The kind of an ABI entry.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub enum AbiType {
    /// A contract function.
    Function,
    /// An event (log).
    Event,
    /// A custom error.
    Error,
    /// The contract constructor.
    Constructor,
    /// The fallback function.
    Fallback,
    /// The receive-ether function.
    Receive,
}

impl AbiType {
    /// Returns the name used in JSON ABIs, e.g. `"function"`.
    pub const fn as_str(self) -> &'static str {
        match self {
            AbiType::Function => "function",
            AbiType::Event => "event",
            AbiType::Error => "error",
            AbiType::Constructor => "constructor",
            AbiType::Fallback => "fallback",
            AbiType::Receive => "receive",
        }
    }
}

impl fmt::Display for AbiType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(self.as_str())
    }
}

/// How a function interacts with blockchain state.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub enum StateMutability {
    /// Neither reads nor modifies state.
    Pure,
    /// Reads but does not modify state.
    View,
    /// May modify state, does not accept ether.
    NonPayable,
    /// May modify state and accepts ether.
    Payable,
}

impl StateMutability {
    /// Returns the name used in JSON ABIs, e.g. `"nonpayable"`.
    pub const fn as_str(self) -> &'static str {
        match self {
            StateMutability::Pure => "pure",
            StateMutability::View => "view",
            StateMutability::NonPayable => "nonpayable",
            StateMutability::Payable => "payable",
        }
    }
}

impl fmt::Display for StateMutability {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(self.as_str())
    }
}

/// A single input or output parameter of an ABI entry.
///
/// Entries of the built-in table are `AbiIO<'static>`; build your own with
/// [`AbiIO::new`].
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub struct AbiIO<'a> {
    /// Parameter name as declared in the source; empty for unnamed return
    /// values.
    pub name: &'a str,
    /// Canonical ABI type, e.g. `"uint256"`, `"address"` or `"tuple"`.
    pub ty: &'a str,
    /// Solidity type as declared in source, e.g. `"contract IERC20"` or
    /// `"struct Foo.Bar"`. It may differ from [`ty`](Self::ty) for
    /// user-defined types encoded as primitives on the wire.
    pub internal_type: &'a str,
    /// Whether this event parameter is indexed. Always `false` for function
    /// and error parameters.
    pub indexed: bool,
    /// Members of a `tuple` (struct) type, in declaration order. Empty for
    /// every other type.
    pub components: &'a [AbiIO<'a>],
}

impl<'a> AbiIO<'a> {
    /// A parameter called `name` of canonical ABI type `ty` (e.g.
    /// `"uint256"`, `"bytes32[]"` or `"tuple"`), not indexed, with
    /// [`internal_type`](Self::internal_type) equal to `ty` and no
    /// components.
    pub const fn new(name: &'a str, ty: &'a str) -> Self {
        AbiIO {
            name,
            ty,
            internal_type: ty,
            indexed: false,
            components: &[],
        }
    }

    /// Sets the Solidity type as declared in source.
    pub const fn with_internal_type(mut self, internal_type: &'a str) -> Self {
        self.internal_type = internal_type;
        self
    }

    /// Sets the members of a `tuple` type (or of the elements of a
    /// `tuple[]`/`tuple[k]` array).
    pub const fn with_components(mut self, components: &'a [AbiIO<'a>]) -> Self {
        self.components = components;
        self
    }

    /// Marks an event parameter as indexed.
    pub const fn with_indexed(mut self, indexed: bool) -> Self {
        self.indexed = indexed;
        self
    }
}

/// A single ABI entry: a function, event or error.
///
/// Entries of the built-in table are `Abi<'static>`. Build your own with
/// [`Abi::new`], e.g. to decode calldata for a function missing from the
/// table, or with the `signatures` feature disabled:
///
/// ```
/// use evmabiless::{Abi, AbiIO, AbiType, MethodPrefix, StateMutability};
///
/// static TRANSFER: Abi = Abi::new(
///     AbiType::Function,
///     MethodPrefix([0xa9, 0x05, 0x9c, 0xbb]), // keccak256("transfer(address,uint256)")
///     "transfer",
///     &[AbiIO::new("to", "address"), AbiIO::new("value", "uint256")],
/// )
/// .with_compact("transfer(address,uint256)")
/// .with_state_mutability(StateMutability::NonPayable)
/// .with_outputs(&[AbiIO::new("", "bool")]);
/// ```
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub struct Abi<'a> {
    /// The 4-byte selector (for events, the first 4 bytes of the topic hash).
    pub selector: MethodPrefix,
    /// The function, event or error name.
    pub name: &'a str,
    /// Human-readable signature in the format accepted by ethers.js, e.g.
    /// `"function transfer(address to, uint256 value) returns (bool)"`.
    pub abi: &'a str,
    /// Canonical signature used to compute the selector, e.g.
    /// `"transfer(address,uint256)"`.
    pub compact: &'a str,
    /// The entry kind.
    pub kind: AbiType,
    /// State mutability; `None` for events and errors.
    pub state_mutability: Option<StateMutability>,
    /// Whether an event is declared `anonymous`.
    pub anonymous: bool,
    /// Arguments in declaration order.
    pub inputs: &'a [AbiIO<'a>],
    /// Return values of a function; empty for events and errors.
    pub outputs: &'a [AbiIO<'a>],
}

impl<'a> Abi<'a> {
    /// An entry of the given kind, selector, name and inputs. The other
    /// fields start empty: no outputs, no state mutability, not anonymous,
    /// and empty [`abi`](Self::abi) and [`compact`](Self::compact) strings.
    ///
    /// The selector is not checked against the name and inputs, which would
    /// require keccak256.
    pub const fn new(
        kind: AbiType,
        selector: MethodPrefix,
        name: &'a str,
        inputs: &'a [AbiIO<'a>],
    ) -> Self {
        Abi {
            selector,
            name,
            abi: "",
            compact: "",
            kind,
            state_mutability: None,
            anonymous: false,
            inputs,
            outputs: &[],
        }
    }

    /// Sets the return values of a function.
    pub const fn with_outputs(mut self, outputs: &'a [AbiIO<'a>]) -> Self {
        self.outputs = outputs;
        self
    }

    /// Sets the state mutability of a function.
    pub const fn with_state_mutability(mut self, state_mutability: StateMutability) -> Self {
        self.state_mutability = Some(state_mutability);
        self
    }

    /// Sets the human-readable signature, e.g.
    /// `"function transfer(address to, uint256 value) returns (bool)"`.
    pub const fn with_abi(mut self, abi: &'a str) -> Self {
        self.abi = abi;
        self
    }

    /// Sets the canonical signature, e.g. `"transfer(address,uint256)"`.
    pub const fn with_compact(mut self, compact: &'a str) -> Self {
        self.compact = compact;
        self
    }

    /// Marks an event as anonymous.
    pub const fn with_anonymous(mut self, anonymous: bool) -> Self {
        self.anonymous = anonymous;
        self
    }
}

/// Returns the whole built-in signature table, sorted by selector: every
/// known signature with the `signatures` feature, or only the most common
/// token operations with just `common-signatures`.
#[cfg(any(feature = "signatures", feature = "common-signatures"))]
pub fn signatures() -> &'static [Abi<'static>] {
    &SIGNATURES
}

/// Returns the ABI associated with the given selector, or `None` if it is not
/// in the built-in signature table (see [`signatures`]).
#[cfg(any(feature = "signatures", feature = "common-signatures"))]
pub fn lookup_abi(selector: MethodPrefix) -> Option<&'static Abi<'static>> {
    SIGNATURES
        .binary_search_by_key(&selector, |abi| abi.selector)
        .ok()
        .map(|i| &SIGNATURES[i])
}
