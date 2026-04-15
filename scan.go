package evmabiless

import "bytes"

// MethodPrefix is a 4-byte function selector — the first four bytes of the
// keccak256 hash of the function's canonical signature (Abi.Compact). It is
// the value the EVM reads from calldata to dispatch a call.
type MethodPrefix [4]byte

// dispatchPatternLen is the length in bytes of the Solidity dispatch prologue
// we scan for: PUSH1 0x80 DUP1 / DUP1 PUSH4 selector EQ PUSH2 dest JUMPI.
// Encoded as: 80 63 SS SS SS SS 14 61 DD DD 57 = 11 bytes.
const dispatchPatternLen = 11

// ScanContract scans raw (already hex-decoded) EVM bytecode and returns every
// 4-byte method selector referenced by a Solidity-style dispatch entry. The
// pattern matched is:
//
//	DUP1 (0x80) PUSH4 (0x63) <selector> EQ (0x14) PUSH2 (0x61) <dest> JUMPI (0x57)
//
// which regex-wise is: /8063([0-9a-fA-F]{8})1461([0-9a-fA-F]{4})57/.
//
// The returned slice preserves the scan order and may contain duplicates if
// the same pattern appears more than once (e.g. a contract whose creation
// bytecode embeds its runtime bytecode).
func ScanContract(bytecode []byte) []MethodPrefix {
	var res []MethodPrefix

	for len(bytecode) >= dispatchPatternLen {
		offt := bytes.Index(bytecode, []byte{0x80, 0x63})
		if offt == -1 {
			// no further DUP1 PUSH4 occurrences
			break
		}
		// Advance past the 8063 we just located. We only skip two bytes
		// (rather than the whole 11-byte pattern) so that overlapping or
		// back-to-back dispatch entries are not missed when the selector
		// itself happens to contain 0x80 0x63.
		bytecode = bytecode[offt+2:]
		if len(bytecode) < dispatchPatternLen-2 {
			// not enough bytes remaining to hold selector + 1461 + dest + 57
			break
		}
		// Confirm the remainder of the pattern: bytecode[0:4] is the
		// selector, bytecode[4:6] must be 1461, bytecode[6:8] is the jump
		// destination (any value), bytecode[8] must be 57.
		if bytecode[4] != 0x14 || bytecode[5] != 0x61 || bytecode[8] != 0x57 {
			continue
		}

		var m MethodPrefix
		copy(m[:], bytecode[:4])
		res = append(res, m)
	}

	return res
}

// AbiList scans the provided bytecode and returns the ABI definitions for
// every known method selector found. Unknown selectors are silently dropped.
// The result preserves scan order and may contain duplicate entries mirroring
// any duplicates returned by ScanContract.
func AbiList(bytecode []byte) []*Abi {
	found := ScanContract(bytecode)
	if len(found) == 0 {
		return nil
	}
	res := make([]*Abi, 0, len(found))

	for _, code := range found {
		if abi, ok := signatures[code]; ok {
			res = append(res, abi)
		}
	}

	return res
}

// LookupAbi returns the ABI associated with the given 4-byte selector, or nil
// if the selector is not present in the built-in signature table.
func LookupAbi(pfx MethodPrefix) *Abi {
	if abi, ok := signatures[pfx]; ok {
		return abi
	}
	return nil
}
