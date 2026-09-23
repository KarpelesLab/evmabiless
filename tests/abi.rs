#![cfg(feature = "abi")]

use evmabiless::{AbiType, MethodPrefix, StateMutability, lookup_abi, signatures};
use tiny_keccak::{Hasher, Keccak};

#[test]
fn lookup_known_and_unknown() {
    let transfer = lookup_abi(MethodPrefix::from(0xa9059cbb)).expect("transfer is known");
    assert_eq!(transfer.name, "transfer");
    assert_eq!(transfer.compact, "transfer(address,uint256)");
    assert_eq!(transfer.kind, AbiType::Function);
    assert_eq!(transfer.state_mutability, Some(StateMutability::NonPayable));
    assert_eq!(transfer.inputs.len(), 2);
    assert_eq!(transfer.outputs[0].ty, "bool");

    assert!(lookup_abi(MethodPrefix([0, 0, 0, 0])).is_none());
}

#[test]
fn lookup_from_calldata() {
    // approve(0x...01, 1)
    let mut calldata = [0u8; 68];
    calldata[..4].copy_from_slice(&[0x09, 0x5e, 0xa7, 0xb3]);
    calldata[35] = 1;
    calldata[67] = 1;
    let abi = lookup_abi(MethodPrefix::from_calldata(&calldata).unwrap()).unwrap();
    assert_eq!(abi.compact, "approve(address,uint256)");
}

#[test]
fn table_is_sorted_and_unique() {
    let sigs = signatures();
    assert!(sigs.len() > 600);
    assert!(sigs.windows(2).all(|w| w[0].selector < w[1].selector));
    for abi in sigs {
        assert_eq!(lookup_abi(abi.selector), Some(abi));
    }
}

#[test]
fn selectors_match_keccak_of_compact_signature() {
    for abi in signatures() {
        let mut k = Keccak::v256();
        k.update(abi.compact.as_bytes());
        let mut out = [0u8; 32];
        k.finalize(&mut out);
        assert_eq!(
            abi.selector.to_bytes(),
            out[..4],
            "selector mismatch for {}",
            abi.compact
        );
        assert!(abi.abi.starts_with(abi.kind.as_str()), "{}", abi.abi);
        assert_eq!(
            abi.state_mutability.is_some(),
            abi.kind == AbiType::Function,
            "{}",
            abi.abi
        );
    }
}
