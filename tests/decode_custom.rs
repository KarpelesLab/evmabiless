//! Decoding with caller-supplied ABIs: needs only the `decode` feature.
#![cfg(feature = "decode")]

use evmabiless::{Abi, AbiIO, AbiType, DecodeErrorKind, MAX_DEPTH, MethodPrefix, Value};

const SELECTOR: MethodPrefix = MethodPrefix([0x12, 0x34, 0x56, 0x78]);

fn word(v: u64) -> [u8; 32] {
    let mut w = [0u8; 32];
    w[24..].copy_from_slice(&v.to_be_bytes());
    w
}

fn calldata(words: &[[u8; 32]]) -> Vec<u8> {
    let mut data = SELECTOR.to_bytes().to_vec();
    for w in words {
        data.extend_from_slice(w);
    }
    data
}

/// `f((uint64 a, bool b)[] items, int8 delta)`, defined as a `static`.
static ITEM: [AbiIO; 2] = [AbiIO::new("a", "uint64"), AbiIO::new("b", "bool")];
static F: Abi = Abi::new(
    AbiType::Function,
    SELECTOR,
    "f",
    &[
        AbiIO::new("items", "tuple[]")
            .with_components(&ITEM)
            .with_internal_type("struct S.Item[]"),
        AbiIO::new("delta", "int8"),
    ],
);

#[test]
fn static_custom_abi() {
    let data = calldata(&[
        word(0x40), // offset of items
        [0xff; 32], // delta = -1
        word(2),    // items.length
        word(5),
        word(1),
        word(6),
        word(0),
    ]);
    let params: Vec<_> = F.decode_input(&data).unwrap().collect();
    assert_eq!(params[0].io.internal_type, "struct S.Item[]");
    assert_eq!(params[0].value.to_string(), "[(5, true), (6, false)]");
    assert_eq!(params[1].value.to_string(), "-1");

    let Value::Array(items) = &params[0].value else {
        panic!("not an array")
    };
    let Some(Value::Tuple(first)) = items.clone().next() else {
        panic!("not a tuple")
    };
    let names: Vec<_> = first.map(|p| p.io.name).collect();
    assert_eq!(names, ["a", "b"]);

    // Validation still applies: int8 -1 must be sign-extended.
    let mut bad = data.clone();
    bad[4 + 32] = 0;
    assert_eq!(
        F.decode_input(&bad).unwrap_err().kind(),
        DecodeErrorKind::DirtyPadding
    );
}

#[test]
fn runtime_abi_borrowing_local_data() {
    // An ABI assembled at run time, e.g. from metadata received with the
    // transaction, borrowing from buffers that are not 'static.
    let names = String::from("recipient amount");
    let (recipient, amount) = names.split_once(' ').unwrap();
    let inputs = [
        AbiIO::new(recipient, "address"),
        AbiIO::new(amount, "uint256"),
    ];
    let abi = Abi::new(AbiType::Function, SELECTOR, "pay", &inputs);

    let data = calldata(&[word(0xabcd), word(1_000_000)]);
    let shown: Vec<_> = abi
        .decode_input(&data)
        .unwrap()
        .map(|p| format!("{}: {}", p.io.name, p.value))
        .collect();
    assert_eq!(
        shown,
        [
            "recipient: 0x000000000000000000000000000000000000abcd",
            "amount: 1000000"
        ]
    );
}

#[test]
fn invalid_types_are_errors() {
    let data = calldata(&[word(0)]);
    for ty in [
        "fixed128x18",
        "uint7",
        "uint",
        "bytes33",
        "uint8[0]",
        "tuple", // no components
        "address[",
        "",
        "string]",
    ] {
        let inputs = [AbiIO::new("x", ty)];
        let abi = Abi::new(AbiType::Function, SELECTOR, "f", &inputs);
        assert_eq!(
            abi.decode_input(&data).unwrap_err().kind(),
            DecodeErrorKind::UnsupportedType,
            "{ty:?}"
        );
    }

    // Too deep, even though the data is a single empty array.
    let deep = format!("uint256{}", "[]".repeat(MAX_DEPTH));
    let inputs = [AbiIO::new("x", &deep)];
    let abi = Abi::new(AbiType::Function, SELECTOR, "f", &inputs);
    let data = calldata(&[word(0x20), word(0)]);
    assert_eq!(
        abi.decode_input(&data).unwrap_err().kind(),
        DecodeErrorKind::TooDeep
    );

    // A static array too large to ever fit, and one whose size overflows.
    for ty in ["uint256[4294967295]", "uint256[18446744073709551615][2]"] {
        let inputs = [AbiIO::new("x", ty)];
        let abi = Abi::new(AbiType::Function, SELECTOR, "f", &inputs);
        let kind = abi.decode_input(&data).unwrap_err().kind();
        assert!(
            matches!(
                kind,
                DecodeErrorKind::Truncated | DecodeErrorKind::UnsupportedType
            ),
            "{ty}: {kind:?}"
        );
    }

    // Events have no calldata.
    let event = Abi::new(AbiType::Event, SELECTOR, "E", &[]);
    assert_eq!(
        event.decode_input(&data).unwrap_err().kind(),
        DecodeErrorKind::NotCallable
    );
}
