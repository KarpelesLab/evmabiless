//! The `common-signatures` table, used when the full table is disabled.
#![cfg(all(feature = "common-signatures", not(feature = "signatures")))]

use evmabiless::{MethodPrefix, lookup_abi, signatures};

#[test]
fn contents() {
    let mut compact: Vec<_> = signatures().iter().map(|abi| abi.compact).collect();
    compact.sort_unstable();
    assert_eq!(
        compact,
        [
            "approve(address,uint256)",
            "decreaseAllowance(address,uint256)",
            "deposit()",
            "increaseAllowance(address,uint256)",
            "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
            "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
            "safeTransferFrom(address,address,uint256)",
            "safeTransferFrom(address,address,uint256,bytes)",
            "safeTransferFrom(address,address,uint256,uint256,bytes)",
            "setApprovalForAll(address,bool)",
            "transfer(address,uint256)",
            "transferFrom(address,address,uint256)",
            "withdraw(uint256)",
        ]
    );
}

#[test]
fn lookup() {
    assert_eq!(
        lookup_abi(MethodPrefix::from(0xa9059cbb)).unwrap().name,
        "transfer"
    );
    // In the full table only: balanceOf(address).
    assert!(lookup_abi(MethodPrefix::from(0x70a08231)).is_none());
}

#[cfg(feature = "decode")]
#[test]
fn decode_calldata_with_common_table() {
    use evmabiless::{DecodeErrorKind, decode_calldata};

    // withdraw(1 ether)
    let mut calldata = vec![0x2e, 0x1a, 0x7d, 0x4d];
    let mut amount = [0u8; 32];
    amount[24..].copy_from_slice(&1_000_000_000_000_000_000u64.to_be_bytes());
    calldata.extend_from_slice(&amount);
    let call = decode_calldata(&calldata).unwrap();
    let params: Vec<_> = call
        .params
        .map(|p| format!("{}: {}", p.io.name, p.value))
        .collect();
    assert_eq!(params, ["wad: 1000000000000000000"]);

    // balanceOf(address) is not in the common table.
    let mut calldata = vec![0x70, 0xa0, 0x82, 0x31];
    calldata.extend_from_slice(&[0; 32]);
    assert_eq!(
        decode_calldata(&calldata).unwrap_err().kind(),
        DecodeErrorKind::UnknownSelector
    );
}
