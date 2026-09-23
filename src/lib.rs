//! ABI recovery for EVM smart contracts without requiring the contract's ABI.
//!
//! Given the bytecode of a deployed contract, this crate extracts the 4-byte
//! method selectors emitted by the Solidity compiler's dispatch prologue and
//! matches them against a built-in table of several hundred well-known
//! method, event and error signatures.
//!
//! The crate is `#![no_std]` and never allocates: the signature table is a
//! sorted `static` array, lookups are binary searches, and scanning returns
//! lazy iterators over the input.
//!
//! # Features
//!
//! All features are enabled by default; each can be used on its own.
//!
//! - `abi`: the built-in signature table, [`lookup_abi`] and [`signatures`].
//!   Enough to identify the function a transaction calls (see
//!   [`MethodPrefix::from_calldata`]) without pulling in the bytecode scanner.
//! - `decode` (implies `abi`): [`decode_calldata`] and [`Abi::decode_input`],
//!   which validate a transaction's calldata against the ABI and decode its
//!   arguments into zero-copy [`Value`]s, e.g. to show them to a user before
//!   signing.
//! - `scan`: the bytecode scanner, [`scan_contract`] and
//!   [`scan_contract_hex`]. On its own it yields raw selectors and does not
//!   embed the signature table.
//!
//! [`abi_list`] and [`abi_list_hex`], which scan bytecode and look up every
//! selector found, require both.
//!
//! # Examples
//!
//! Identifying the function a transaction calls (`abi` feature):
//!
//! ```
//! # #[cfg(feature = "abi")] {
//! use evmabiless::{lookup_abi, MethodPrefix};
//!
//! let calldata = [0xa9, 0x05, 0x9c, 0xbb, /* arguments... */];
//! let selector = MethodPrefix::from_calldata(&calldata).unwrap();
//! let abi = lookup_abi(selector).unwrap();
//! assert_eq!(abi.abi, "function transfer(address to, uint256 value) returns (bool)");
//! # }
//! ```
//!
//! Decoding its arguments as well (`decode` feature):
//!
//! ```
//! # #[cfg(feature = "decode")] {
//! use evmabiless::{decode_calldata, DecodeErrorKind};
//!
//! let mut calldata = [0u8; 68];
//! calldata[..4].copy_from_slice(&[0xa9, 0x05, 0x9c, 0xbb]);
//! calldata[35] = 0xff;
//! calldata[67] = 100;
//!
//! let call = decode_calldata(&calldata).unwrap();
//! let mut params = call.params.map(|p| (p.io.name, p.value.to_string()));
//! assert_eq!(params.next().unwrap(), ("to", "0x00000000000000000000000000000000000000ff".into()));
//! assert_eq!(params.next().unwrap(), ("value", "100".into()));
//!
//! // Anything that is not the canonical encoding is rejected.
//! calldata[4] = 1; // dirty address padding
//! assert_eq!(decode_calldata(&calldata).unwrap_err().kind(), DecodeErrorKind::DirtyPadding);
//! # }
//! ```
//!
//! Recovering the ABI of a contract from its bytecode (`scan` and `abi`
//! features). Hex bytecode, e.g. from `eth_getCode`, is decoded on the fly:
//!
//! ```
//! # #[cfg(all(feature = "scan", feature = "abi"))] {
//! use evmabiless::abi_list_hex;
//!
//! // DUP1 PUSH4 a9059cbb EQ PUSH2 0x00ff JUMPI
//! for abi in abi_list_hex("0x8063a9059cbb146100ff57")? {
//!     assert_eq!(abi.compact, "transfer(address,uint256)");
//! }
//! # }
//! # Ok::<(), evmabiless::HexError>(())
//! ```

#![no_std]
#![forbid(unsafe_code)]
#![warn(missing_docs)]
#![cfg_attr(docsrs, feature(doc_cfg))]

use core::fmt;
use core::str::FromStr;

#[cfg(feature = "abi")]
mod abi;
#[cfg(feature = "decode")]
mod decode;
#[cfg(feature = "scan")]
mod scan;
#[cfg(feature = "abi")]
#[rustfmt::skip]
mod signatures;

#[cfg(feature = "abi")]
pub use abi::{Abi, AbiIO, AbiType, StateMutability, lookup_abi, signatures};
#[cfg(feature = "decode")]
pub use decode::{
    Address, Array, Call, DecodeError, DecodeErrorKind, DecodeMode, Int, MAX_DEPTH, Param, Params,
    Uint, Value, decode_calldata, decode_calldata_with,
};
#[cfg(all(feature = "scan", feature = "abi"))]
pub use scan::{AbiList, abi_list, abi_list_hex};
#[cfg(feature = "scan")]
pub use scan::{ScanContract, scan_contract, scan_contract_hex};

/// A 4-byte function selector: the first four bytes of the keccak256 hash of
/// the function's canonical signature (`Abi::compact`). It is the value the
/// EVM reads from calldata to dispatch a call.
///
/// It formats (via [`Display`](fmt::Display) and [`LowerHex`](fmt::LowerHex))
/// as 8 lowercase hex digits, and parses from 8 hex digits with an optional
/// `0x` prefix.
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Default)]
pub struct MethodPrefix(pub [u8; 4]);

impl MethodPrefix {
    /// Creates a selector from its four bytes.
    pub const fn new(bytes: [u8; 4]) -> Self {
        MethodPrefix(bytes)
    }

    /// Parses a selector from exactly 8 hex digits, optionally prefixed by
    /// `0x` or `0X`.
    pub const fn from_hex(s: &str) -> Result<Self, HexError> {
        let s = strip_0x(s.as_bytes());
        if s.len() != 8 {
            return Err(HexError::InvalidLength);
        }
        let mut out = [0u8; 4];
        let mut i = 0;
        while i < 4 {
            match (hex_val(s[2 * i]), hex_val(s[2 * i + 1])) {
                (Some(hi), Some(lo)) => out[i] = (hi << 4) | lo,
                _ => return Err(HexError::InvalidCharacter),
            }
            i += 1;
        }
        Ok(MethodPrefix(out))
    }

    /// Returns the selector of a call, i.e. the first four bytes of the
    /// transaction's calldata (input data), or `None` if it is shorter than
    /// four bytes.
    pub const fn from_calldata(calldata: &[u8]) -> Option<Self> {
        match calldata {
            [a, b, c, d, ..] => Some(MethodPrefix([*a, *b, *c, *d])),
            _ => None,
        }
    }

    /// Returns the four selector bytes.
    pub const fn to_bytes(self) -> [u8; 4] {
        self.0
    }

    /// Returns the selector as a big-endian integer, e.g. `0xa9059cbb` for
    /// `transfer(address,uint256)`.
    pub const fn to_u32(self) -> u32 {
        u32::from_be_bytes(self.0)
    }
}

impl From<[u8; 4]> for MethodPrefix {
    fn from(bytes: [u8; 4]) -> Self {
        MethodPrefix(bytes)
    }
}

impl From<MethodPrefix> for [u8; 4] {
    fn from(p: MethodPrefix) -> Self {
        p.0
    }
}

impl From<u32> for MethodPrefix {
    fn from(v: u32) -> Self {
        MethodPrefix(v.to_be_bytes())
    }
}

impl From<MethodPrefix> for u32 {
    fn from(p: MethodPrefix) -> Self {
        p.to_u32()
    }
}

impl FromStr for MethodPrefix {
    type Err = HexError;

    fn from_str(s: &str) -> Result<Self, HexError> {
        MethodPrefix::from_hex(s)
    }
}

impl fmt::LowerHex for MethodPrefix {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        if f.alternate() {
            f.write_str("0x")?;
        }
        for b in self.0 {
            write!(f, "{b:02x}")?;
        }
        Ok(())
    }
}

impl fmt::Display for MethodPrefix {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::LowerHex::fmt(self, f)
    }
}

impl fmt::Debug for MethodPrefix {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "MethodPrefix({self:#x})")
    }
}

/// Error returned when parsing hex input.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub enum HexError {
    /// The input has the wrong number of hex digits (odd for bytecode, other
    /// than 8 for a selector).
    InvalidLength,
    /// The input contains a character that is not a hex digit.
    InvalidCharacter,
}

impl fmt::Display for HexError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(match self {
            HexError::InvalidLength => "invalid hex string length",
            HexError::InvalidCharacter => "invalid hex character",
        })
    }
}

impl core::error::Error for HexError {}

const fn strip_0x(s: &[u8]) -> &[u8] {
    match s {
        [b'0', b'x' | b'X', rest @ ..] => rest,
        _ => s,
    }
}

const fn hex_val(c: u8) -> Option<u8> {
    match c {
        b'0'..=b'9' => Some(c - b'0'),
        b'a'..=b'f' => Some(c - b'a' + 10),
        b'A'..=b'F' => Some(c - b'A' + 10),
        _ => None,
    }
}
