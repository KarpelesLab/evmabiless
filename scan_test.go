package evmabiless

import (
	"encoding/hex"
	"testing"
)

// mustHex decodes a hex string or fails the test.
func mustHex(t *testing.T, s string) []byte {
	t.Helper()
	b, err := hex.DecodeString(s)
	if err != nil {
		t.Fatalf("invalid hex in test fixture: %v", err)
	}
	return b
}

func TestScanContract(t *testing.T) {
	// Two dispatch entries: selectors 0xaabbccdd and 0x11223344.
	// Layout: 8063 <selector> 1461 <dest> 57 (11 bytes each).
	code := mustHex(t, "8063aabbccdd1461dead578063112233441461beef57")

	got := ScanContract(code)
	if len(got) != 2 {
		t.Fatalf("expected 2 selectors, got %d: %x", len(got), got)
	}
	if got[0] != (MethodPrefix{0xaa, 0xbb, 0xcc, 0xdd}) {
		t.Errorf("first selector = %x, want aabbccdd", got[0])
	}
	if got[1] != (MethodPrefix{0x11, 0x22, 0x33, 0x44}) {
		t.Errorf("second selector = %x, want 11223344", got[1])
	}
}

func TestScanContractMinimalLength(t *testing.T) {
	// Exactly 11 bytes — a single dispatch entry with nothing else.
	// Regression guard for the previous `len > 11` off-by-one.
	code := mustHex(t, "8063deadbeef146100ff57")
	if len(code) != dispatchPatternLen {
		t.Fatalf("fixture length = %d, want %d", len(code), dispatchPatternLen)
	}

	got := ScanContract(code)
	if len(got) != 1 {
		t.Fatalf("expected 1 selector for minimal-length bytecode, got %d", len(got))
	}
	if got[0] != (MethodPrefix{0xde, 0xad, 0xbe, 0xef}) {
		t.Errorf("selector = %x, want deadbeef", got[0])
	}
}

func TestScanContractSelectorContaining8063(t *testing.T) {
	// Selector itself contains 0x80 0x63 — verifies that advancing only two
	// bytes after a hit still lets the scanner recognise the pattern and
	// does not get desynchronised on the embedded 8063.
	code := mustHex(t, "806380630102146100aa57")

	got := ScanContract(code)
	if len(got) != 1 {
		t.Fatalf("expected 1 selector, got %d", len(got))
	}
	if got[0] != (MethodPrefix{0x80, 0x63, 0x01, 0x02}) {
		t.Errorf("selector = %x, want 80630102", got[0])
	}
}

func TestScanContractNoMatch(t *testing.T) {
	code := mustHex(t, "60806040526000805534801561001457600080fd5b50")
	if got := ScanContract(code); got != nil {
		t.Errorf("expected nil for non-matching bytecode, got %v", got)
	}
}

func TestScanContractEmpty(t *testing.T) {
	if got := ScanContract(nil); got != nil {
		t.Errorf("expected nil for empty input, got %v", got)
	}
}

func TestLookupAbiUnknown(t *testing.T) {
	if abi := LookupAbi(MethodPrefix{0x00, 0x00, 0x00, 0x00}); abi != nil {
		t.Errorf("expected nil for unknown selector, got %+v", abi)
	}
}

func TestAbiListUnknownSelectorsDropped(t *testing.T) {
	// Two dispatch entries pointing at selectors that are almost certainly
	// not in the signature table — AbiList must return an empty result, not
	// panic.
	code := mustHex(t, "806300000001146100015780630000000214610002576100")
	abis := AbiList(code)
	for _, a := range abis {
		if a == nil {
			t.Fatal("AbiList returned a nil entry")
		}
	}
}
