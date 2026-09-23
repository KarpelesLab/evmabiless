use evmabiless::{HexError, MethodPrefix};

#[test]
fn method_prefix_hex() {
    let p: MethodPrefix = "0xa9059cbb".parse().unwrap();
    assert_eq!(p, MethodPrefix([0xa9, 0x05, 0x9c, 0xbb]));
    assert_eq!(p.to_u32(), 0xa9059cbb);
    assert_eq!(p.to_string(), "a9059cbb");
    assert_eq!(format!("{p:#x}"), "0xa9059cbb");
    assert_eq!(format!("{p:?}"), "MethodPrefix(0xa9059cbb)");
    assert_eq!(
        MethodPrefix::from_hex("a9059c"),
        Err(HexError::InvalidLength)
    );
    assert_eq!(
        MethodPrefix::from_hex("a9059cbg"),
        Err(HexError::InvalidCharacter)
    );
}

#[test]
fn method_prefix_from_calldata() {
    assert_eq!(
        MethodPrefix::from_calldata(&[0xa9, 0x05, 0x9c, 0xbb, 0x00, 0x01]),
        Some(MethodPrefix::from(0xa9059cbb))
    );
    assert_eq!(
        MethodPrefix::from_calldata(&[0xa9, 0x05, 0x9c, 0xbb]),
        Some(MethodPrefix::from(0xa9059cbb))
    );
    assert_eq!(MethodPrefix::from_calldata(&[0xa9, 0x05, 0x9c]), None);
    assert_eq!(MethodPrefix::from_calldata(&[]), None);
}
