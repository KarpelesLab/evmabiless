#![cfg(all(feature = "scan", feature = "abi"))]

mod common;

use common::hex;
use evmabiless::{abi_list, abi_list_hex};

#[test]
fn abi_list_skips_unknown() {
    // unknown, transfer, unknown, balanceOf
    let code = "806300000001146100015780\
                63a9059cbb146100025780\
                630000000214610003578063\
                70a08231146100045700";
    let names: Vec<_> = abi_list(&hex(code)).map(|a| a.name).collect();
    assert_eq!(names, ["transfer", "balanceOf"]);
    let names: Vec<_> = abi_list_hex(code).unwrap().map(|a| a.name).collect();
    assert_eq!(names, ["transfer", "balanceOf"]);
}
