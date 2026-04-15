// Package evmabiless provides ABI recovery for EVM smart contracts without
// requiring the contract's full ABI specification. Given the bytecode of a
// contract, it extracts the 4-byte method selectors emitted by the Solidity
// compiler's dispatch prologue and matches them against a built-in table of
// known ABIs. This allows interacting with deployed contracts (for example via
// ethers.js or go-ethereum) when only the bytecode is available.
package evmabiless

// AbiIO describes a single input or output parameter of an ABI entry
// (function, event, error or constructor).
type AbiIO struct {
	// InternalType is the Solidity type as declared in source (e.g. "contract
	// IERC20", "struct Foo.Bar"). It may differ from Type for user-defined
	// types that are encoded as primitives on the wire.
	InternalType string `json:"internalType"`

	// Name is the parameter name as declared in the source. It is an empty
	// string for unnamed return values.
	Name string `json:"name"`

	// Type is the canonical ABI type (e.g. "uint256", "address", "bytes32").
	Type string `json:"type"`

	// Indexed reports whether this parameter is indexed. Only meaningful for
	// event parameters; always false for function/error inputs and outputs.
	Indexed bool `json:"indexed,omitempty"`
}

// Abi represents a single ABI entry: a function, event, error or
// constructor. The zero value is not useful — Abi values are obtained from
// the built-in signature table via LookupAbi or AbiList.
type Abi struct {
	// ABI is the human-readable signature in the format accepted by
	// ethers.js, e.g. "function transfer(address to, uint256 amount) returns (bool)".
	ABI string `json:"abi"`

	// Compact is the canonical signature form used to compute the 4-byte
	// keccak256 selector, e.g. "transfer(address,uint256)".
	Compact string `json:"compact"`

	// Inputs are the function/event arguments in declaration order.
	Inputs []*AbiIO `json:"inputs"`

	// Name is the function, event or error name. Empty for constructors and
	// the fallback/receive entries.
	Name string `json:"name"`

	// Outputs are the return values of a function. Nil for events, errors and
	// constructors.
	Outputs []*AbiIO `json:"outputs"`

	// StateMutability describes how the function interacts with state:
	// "pure", "view", "nonpayable" or "payable". Empty for events and errors.
	StateMutability string `json:"stateMutability,omitempty"`

	// Type is the ABI entry kind: "function", "event", "error",
	// "constructor", "fallback" or "receive".
	Type string `json:"type"`
}
