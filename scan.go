package evmabiless

import "bytes"

type MethodPrefix [4]byte

// ScanContract will scan the bytecode of a contract and return a list of method hash prefixes
func ScanContract(bytecode []byte) []MethodPrefix {
	// Regexp: 8063([0-9a-fA-F]{8})1461([0-9a-fA-F]{4})57
	// Basically, look for 8063, and confirm it has 1461 4 bytes later, and 57 another 2 bytes later
	var res []MethodPrefix

	for len(bytecode) > 11 {
		offt := bytes.Index(bytecode, []byte{0x80, 0x63})
		if offt == -1 {
			// no more
			break
		}
		// move bytecode forward and eat the 8063 (so that when we continue we don't match the same value again)
		bytecode = bytecode[offt+2:]
		if len(bytecode) < 9 {
			// end of buffer
			break
		}
		// confirm we have 1461 at offset 4 & 5
		if bytecode[4] != 0x14 || bytecode[5] != 0x61 || bytecode[8] != 0x57 {
			continue
		}

		var m MethodPrefix
		copy(m[:], bytecode[:4])
		res = append(res, m)
	}

	return res
}

// AbiList returns a list of ABIs found in the provided bytecode, ignoring any unknown ABIs
func AbiList(bytecode []byte) []*Abi {
	found := ScanContract(bytecode)
	var res []*Abi

	for _, code := range found {
		if abi, ok := signatures[code]; ok {
			res = append(res, abi)
		}
	}

	return res
}

// LookupAbi will return the ABI matching the provided prefix, or nil if no such ABI is known
func LookupAbi(pfx MethodPrefix) *Abi {
	if abi, ok := signatures[pfx]; ok {
		return abi
	}
	return nil
}
