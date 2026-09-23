use core::fmt;

use crate::MethodPrefix;
use crate::signatures::SIGNATURES;

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
#[derive(Clone, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub struct AbiIO {
    /// Parameter name as declared in the source; empty for unnamed return
    /// values.
    pub name: &'static str,
    /// Canonical ABI type, e.g. `"uint256"`, `"address"` or `"tuple"`.
    pub ty: &'static str,
    /// Solidity type as declared in source, e.g. `"contract IERC20"` or
    /// `"struct Foo.Bar"`. It may differ from [`ty`](Self::ty) for
    /// user-defined types encoded as primitives on the wire.
    pub internal_type: &'static str,
    /// Whether this event parameter is indexed. Always `false` for function
    /// and error parameters.
    pub indexed: bool,
    /// Members of a `tuple` (struct) type, in declaration order. Empty for
    /// every other type.
    pub components: &'static [AbiIO],
}

/// A single ABI entry: a function, event or error.
#[derive(Clone, Debug, PartialEq, Eq, Hash)]
#[non_exhaustive]
pub struct Abi {
    /// The 4-byte selector (for events, the first 4 bytes of the topic hash).
    pub selector: MethodPrefix,
    /// The function, event or error name.
    pub name: &'static str,
    /// Human-readable signature in the format accepted by ethers.js, e.g.
    /// `"function transfer(address to, uint256 value) returns (bool)"`.
    pub abi: &'static str,
    /// Canonical signature used to compute the selector, e.g.
    /// `"transfer(address,uint256)"`.
    pub compact: &'static str,
    /// The entry kind.
    pub kind: AbiType,
    /// State mutability; `None` for events and errors.
    pub state_mutability: Option<StateMutability>,
    /// Whether an event is declared `anonymous`.
    pub anonymous: bool,
    /// Arguments in declaration order.
    pub inputs: &'static [AbiIO],
    /// Return values of a function; empty for events and errors.
    pub outputs: &'static [AbiIO],
}

/// Returns the whole built-in signature table, sorted by selector.
pub fn signatures() -> &'static [Abi] {
    &SIGNATURES
}

/// Returns the ABI associated with the given selector, or `None` if it is not
/// in the built-in signature table.
pub fn lookup_abi(selector: MethodPrefix) -> Option<&'static Abi> {
    SIGNATURES
        .binary_search_by_key(&selector, |abi| abi.selector)
        .ok()
        .map(|i| &SIGNATURES[i])
}
