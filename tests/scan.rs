#![cfg(feature = "scan")]

mod common;

use common::hex;
use evmabiless::{HexError, MethodPrefix, scan_contract, scan_contract_hex};

fn scan(s: &str) -> Vec<MethodPrefix> {
    let from_bytes: Vec<_> = scan_contract(&hex(s)).collect();
    let from_hex: Vec<_> = scan_contract_hex(s).unwrap().collect();
    assert_eq!(from_bytes, from_hex, "byte and hex scans disagree");
    from_bytes
}

#[test]
fn scan_two_entries() {
    let got = scan("8063aabbccdd1461dead578063112233441461beef57");
    assert_eq!(
        got,
        [
            MethodPrefix([0xaa, 0xbb, 0xcc, 0xdd]),
            MethodPrefix([0x11, 0x22, 0x33, 0x44])
        ]
    );
}

#[test]
fn scan_minimal_length() {
    assert_eq!(
        scan("8063deadbeef146100ff57"),
        [MethodPrefix([0xde, 0xad, 0xbe, 0xef])]
    );
    // One byte short of a full entry.
    assert!(scan("8063deadbeef146100ff").is_empty());
}

#[test]
fn scan_selector_containing_8063() {
    assert_eq!(
        scan("806380630102146100aa57"),
        [MethodPrefix([0x80, 0x63, 0x01, 0x02])]
    );
}

#[test]
fn scan_no_match() {
    assert!(scan("60806040526000805534801561001457600080fd5b50").is_empty());
    assert!(scan("").is_empty());
}

#[test]
fn scan_hex_input() {
    let got: Vec<_> = scan_contract_hex("0x8063AABBCCDD1461DEAD57")
        .unwrap()
        .collect();
    assert_eq!(got, [MethodPrefix([0xaa, 0xbb, 0xcc, 0xdd])]);
    assert_eq!(
        scan_contract_hex("0x806").unwrap_err(),
        HexError::InvalidLength
    );
    assert_eq!(
        scan_contract_hex("80zz").unwrap_err(),
        HexError::InvalidCharacter
    );
}
