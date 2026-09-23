#![cfg(all(feature = "decode", feature = "signatures"))]

mod common;

use common::hex;
use evmabiless::{
    AbiType, DecodeErrorKind, DecodeMode, MethodPrefix, Params, Value, decode_calldata,
    decode_calldata_with, lookup_abi, signatures,
};

/// Canonical calldata produced by ethers.js v6 (`Interface.encodeFunctionData`)
/// and the expected display of each argument.
const VECTORS: &[(&str, &str, &[&str])] = &[
    (
        "transfer(address,uint256)",
        "a9059cbb0000000000000000000000001111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        &[
            "0x1111111111111111111111111111111111111111",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        ],
    ),
    (
        "execute(address[],uint256[],bytes[],bytes32)",
        "2656227d000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000016001010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000ff00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029d42b64e76714244cb00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004deadbeef000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021ababababababababababababababababababababababababababababababababab00000000000000000000000000000000000000000000000000000000000000",
        &[
            "[0x1111111111111111111111111111111111111111, 0x00000000000000000000000000000000000000ff]",
            "[1, 0, 12345678901234567890123]",
            "[0x, 0xdeadbeef, 0xababababababababababababababababababababababababababababababababab]",
            "0x0101010101010101010101010101010101010101010101010101010101010101",
        ],
    ),
    (
        "castVoteWithReason(uint256,uint8,string)",
        "7b3c71d3000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000018492022766f74652220666f7220c3a920e2869220f09fa6800000000000000000",
        &["42", "1", "\"I \\\"vote\\\" for é → 🦀\""],
    ),
    (
        "execute((address,address,uint256,uint256,uint256,bytes),bytes)",
        "47153f8200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000140000000000000000000000000111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000ff00000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000201020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        &[
            "(0x1111111111111111111111111111111111111111, 0x00000000000000000000000000000000000000ff, 7, 8, 9, 0x0102)",
            "0x",
        ],
    ),
    (
        "executeBatch((address,address,uint256,uint256,uint48,bytes,bytes)[],address)",
        "ccf96b4a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000ff000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000180000000000000000000000000111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000ff00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff000000000000000000000000111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000002aabb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        &[
            "[(0x1111111111111111111111111111111111111111, 0x00000000000000000000000000000000000000ff, 1, 2, 3, 0x, 0xff), (0x00000000000000000000000000000000000000ff, 0x1111111111111111111111111111111111111111, 4, 5, 6, 0xaabb, 0x)]",
            "0x00000000000000000000000000000000000000ff",
        ],
    ),
    (
        "balanceOfBatch(address[],uint256[])",
        "4e1273f40000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        &["[]", "[]"],
    ),
    ("totalSupply()", "18160ddd", &[]),
];

fn decode_err(calldata: &[u8], mode: DecodeMode) -> (DecodeErrorKind, usize) {
    let e = decode_calldata_with(calldata, mode).unwrap_err();
    (e.kind(), e.position())
}

fn strict_err(calldata: &[u8]) -> (DecodeErrorKind, usize) {
    decode_err(calldata, DecodeMode::Strict)
}

fn shown(params: Params<'_>) -> Vec<String> {
    params.map(|p| p.value.to_string()).collect()
}

#[test]
fn ethers_vectors() {
    for &(sig, data, expected) in VECTORS {
        let data = hex(data);
        for mode in [DecodeMode::Strict, DecodeMode::Lenient] {
            let call = decode_calldata_with(&data, mode).unwrap_or_else(|e| panic!("{sig}: {e}"));
            assert_eq!(call.abi.compact, sig);
            assert_eq!(call.params.len(), expected.len());
            assert_eq!(shown(call.params), expected, "{sig}");
        }
    }
}

#[test]
fn weth() {
    let data = hex("d0e30db0");
    let call = decode_calldata(&data).unwrap();
    assert_eq!(call.abi.abi, "function deposit()");
    assert_eq!(call.params.len(), 0);

    let data = hex("2e1a7d4d0000000000000000000000000000000000000000000000000de0b6b3a7640000");
    let call = decode_calldata(&data).unwrap();
    assert_eq!(call.abi.compact, "withdraw(uint256)");
    assert_eq!(shown(call.params), ["1000000000000000000"]);
}

#[test]
fn structured_access() {
    let data = hex(VECTORS[1].1); // execute(address[],uint256[],bytes[],bytes32)
    let call = decode_calldata(&data).unwrap();
    let params: Vec<_> = call.params.collect();
    assert_eq!(params[0].io.name, "targets");

    let Value::Array(values) = &params[1].value else {
        panic!("not an array")
    };
    assert_eq!(values.elem_type(), "uint256");
    assert_eq!(values.len(), 3);
    let values: Vec<_> = values
        .clone()
        .map(|v| match v {
            Value::Uint(u) => u.to_u128(),
            _ => panic!("not a uint"),
        })
        .collect();
    assert_eq!(values, [Some(1), Some(0), Some(12345678901234567890123)]);

    let Value::Array(payloads) = &params[2].value else {
        panic!("not an array")
    };
    let payloads: Vec<_> = payloads
        .clone()
        .map(|v| match v {
            Value::Bytes(b) => b.len(),
            _ => panic!("not bytes"),
        })
        .collect();
    assert_eq!(payloads, [0, 4, 33]);

    // Tuple members carry their names.
    let data = hex(VECTORS[4].1); // executeBatch(...)
    let call = decode_calldata(&data).unwrap();
    let batch = call.params.clone().next().unwrap();
    let Value::Array(requests) = batch.value else {
        panic!("not an array")
    };
    assert_eq!(requests.elem_type(), "tuple");
    let Some(Value::Tuple(first)) = requests.clone().next() else {
        panic!("not a tuple")
    };
    let names: Vec<_> = first.map(|p| p.io.name).collect();
    assert_eq!(names.len(), 7);
    assert_eq!(names[0], "from");

    // A Call can be walked again by cloning it.
    assert_eq!(call.params.clone().count(), 2);
    assert_eq!(call.params.count(), 2);
}

#[test]
fn selector_errors() {
    assert_eq!(strict_err(&[]), (DecodeErrorKind::TooShort, 0));
    assert_eq!(
        strict_err(&[0xa9, 0x05, 0x9c]),
        (DecodeErrorKind::TooShort, 0)
    );
    assert_eq!(
        strict_err(&[0, 0, 0, 0]),
        (DecodeErrorKind::UnknownSelector, 0)
    );
    // Transfer(address,address,uint256) is an event: it has no calldata.
    let event = [0xdd, 0xf2, 0x52, 0xad];
    assert_eq!(strict_err(&event), (DecodeErrorKind::NotCallable, 0));
    assert_eq!(
        lookup_abi(MethodPrefix(event))
            .unwrap()
            .decode_input(&event)
            .unwrap_err()
            .kind(),
        DecodeErrorKind::NotCallable
    );

    let transfer = lookup_abi(MethodPrefix::from(0xa9059cbb)).unwrap();
    let e = transfer.decode_input(&hex(VECTORS[6].1)).unwrap_err();
    assert_eq!(e.kind(), DecodeErrorKind::SelectorMismatch);
}

fn hex_str(data: &[u8]) -> String {
    data.iter().map(|b| format!("{b:02x}")).collect()
}

#[test]
fn every_function_in_the_table_is_supported() {
    for abi in signatures() {
        if abi.kind != AbiType::Function {
            continue;
        }
        let selector = abi.selector.to_bytes();
        match abi.decode_input(&selector) {
            Ok(params) => assert_eq!(params.len(), 0, "{}", abi.compact),
            Err(e) => assert_eq!(e.kind(), DecodeErrorKind::Truncated, "{}", abi.compact),
        }
    }
}

#[test]
fn every_truncation_is_rejected() {
    for &(sig, data, _) in VECTORS {
        let data = hex(data);
        for len in 4..data.len() {
            for mode in [DecodeMode::Strict, DecodeMode::Lenient] {
                let (kind, pos) = decode_err(&data[..len], mode);
                assert!(
                    matches!(
                        kind,
                        DecodeErrorKind::Truncated
                            | DecodeErrorKind::OffsetOutOfBounds
                            | DecodeErrorKind::InvalidLength
                    ),
                    "{sig} truncated to {len}: {kind:?}"
                );
                assert!(pos <= len, "{sig} truncated to {len}: position {pos}");
            }
        }
    }
}

#[test]
fn trailing_data() {
    let mut data = hex(VECTORS[0].1);
    let len = data.len();
    data.push(0);
    assert_eq!(strict_err(&data), (DecodeErrorKind::TrailingData, len));
    assert!(decode_calldata_with(&data, DecodeMode::Lenient).is_ok());
}

#[test]
fn value_padding_is_rejected_in_both_modes() {
    let modes = [DecodeMode::Strict, DecodeMode::Lenient];

    // transfer: dirty high byte in the address word.
    let mut data = hex(VECTORS[0].1);
    data[4] = 1;
    for mode in modes {
        assert_eq!(decode_err(&data, mode), (DecodeErrorKind::DirtyPadding, 4));
    }

    // castVoteWithReason: uint8 support = 256.
    let mut data = hex(VECTORS[2].1);
    data[4 + 32 + 30] = 1;
    for mode in modes {
        assert_eq!(decode_err(&data, mode), (DecodeErrorKind::DirtyPadding, 36));
    }

    // setApprovalForAll(address,bool) with bool = 2, then with a dirty high byte.
    let mut data = hex("a22cb465");
    data.extend_from_slice(&[0; 64]);
    data[67] = 2;
    for mode in modes {
        assert_eq!(decode_err(&data, mode), (DecodeErrorKind::InvalidBool, 36));
    }
    data[67] = 1;
    assert!(decode_calldata(&data).is_ok());
    data[36] = 1;
    for mode in modes {
        assert_eq!(decode_err(&data, mode), (DecodeErrorKind::InvalidBool, 36));
    }
}

/// Byte position of the `string` data in the castVoteWithReason vector.
const REASON: usize = 4 + 3 * 32 + 32;

#[test]
fn string_errors() {
    let orig = hex(VECTORS[2].1);

    // Invalid UTF-8 is rejected in both modes.
    let mut data = orig.clone();
    data[REASON] = 0xff;
    for mode in [DecodeMode::Strict, DecodeMode::Lenient] {
        assert_eq!(
            decode_err(&data, mode),
            (DecodeErrorKind::InvalidUtf8, REASON)
        );
    }

    // Non-zero bytes after the string data: strict only.
    let mut data = orig.clone();
    *data.last_mut().unwrap() = 1;
    let len = u64::from_be_bytes(data[REASON - 8..REASON].try_into().unwrap()) as usize;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::DirtyPadding, REASON + len)
    );
    assert!(decode_calldata_with(&data, DecodeMode::Lenient).is_ok());

    // Length larger than the calldata, or than any usize.
    let mut data = orig.clone();
    data[REASON - 2] = 0x10;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::InvalidLength, REASON - 32)
    );
    let mut data = orig;
    data[REASON - 32] = 1;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::InvalidLength, REASON - 32)
    );
}

#[test]
fn offsets() {
    // castVoteWithReason(uint256,uint8,string): the string offset is the
    // third head word and must be 0x60.
    let orig = hex(VECTORS[2].1);
    let offset_pos = 4 + 2 * 32;
    assert_eq!(orig[offset_pos + 31], 0x60);

    // Past the end.
    let mut data = orig.clone();
    data[offset_pos + 30] = 0x10;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::OffsetOutOfBounds, offset_pos)
    );
    let mut data = orig.clone();
    data[offset_pos] = 0x80;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::OffsetOutOfBounds, offset_pos)
    );

    // In bounds but not canonical: move the string one word further and
    // leave a gap. Lenient accepts it (with trailing data), strict does not.
    let mut data = orig.clone();
    data[offset_pos + 31] = 0x80;
    data.splice(REASON - 32..REASON - 32, [0u8; 32]);
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::NonCanonicalOffset, offset_pos)
    );
    let call = decode_calldata_with(&data, DecodeMode::Lenient).unwrap();
    assert_eq!(shown(call.params), VECTORS[2].2);

    // Pointing back into the heads: the same bytes get two meanings, the
    // uint256 42 doubling as the string length. Lenient mode shows a
    // 42-byte string made of the heads; strict mode refuses.
    let mut data = orig;
    data[offset_pos + 31] = 0;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::NonCanonicalOffset, offset_pos)
    );
    let call = decode_calldata_with(&data, DecodeMode::Lenient).unwrap();
    match call.params.last().unwrap().value {
        Value::String(s) => assert_eq!(s.len(), 42),
        v => panic!("not a string: {v:?}"),
    }
}

#[test]
fn huge_array_length_is_rejected_without_iterating() {
    // balanceOfBatch(address[],uint256[]) with both arrays empty; claim the
    // first has 2^64 - 1 elements.
    let mut data = hex(VECTORS[5].1);
    let len_pos = 4 + 64;
    data[len_pos + 24..len_pos + 32].fill(0xff);
    assert_eq!(strict_err(&data), (DecodeErrorKind::InvalidLength, len_pos));
    // A length that fits the calldata, but not its elements.
    data[len_pos + 24..len_pos + 32].fill(0);
    data[len_pos + 31] = 3;
    assert_eq!(
        strict_err(&data),
        (DecodeErrorKind::Truncated, len_pos + 32)
    );
}

/// Walks every value, checking that iteration yields as many items as it
/// announces, and returns the number of values seen.
fn walk(params: Params<'_>) -> usize {
    let expected = params.len();
    let mut count = 0;
    let mut n = 0;
    for p in params {
        count += 1;
        n += 1 + walk_value(&p.value);
    }
    assert_eq!(count, expected, "tuple yielded fewer members than declared");
    n
}

fn walk_value(v: &Value<'_>) -> usize {
    let _ = v.to_string();
    match v {
        Value::Array(a) => {
            let expected = a.len();
            let mut count = 0;
            let mut n = 0;
            for v in a.clone() {
                count += 1;
                n += 1 + walk_value(&v);
            }
            assert_eq!(
                count, expected,
                "array yielded fewer elements than its length"
            );
            n
        }
        Value::Tuple(t) => walk(t.clone()),
        _ => 0,
    }
}

#[test]
fn fuzz_mutations_never_panic() {
    // xorshift64*: deterministic, no dependency.
    let mut state = 0x9e37_79b9_7f4a_7c15u64;
    let mut rand = move || {
        state ^= state >> 12;
        state ^= state << 25;
        state ^= state >> 27;
        state.wrapping_mul(0x2545_f491_4f6c_dd1d)
    };
    let iterations = std::env::var("FUZZ_ITERATIONS")
        .ok()
        .and_then(|v| v.parse().ok())
        .unwrap_or(200_000);
    let mut accepted = 0;
    for _ in 0..iterations {
        let (_, data, _) = VECTORS[rand() as usize % VECTORS.len()];
        let mut data = hex(data);
        for _ in 0..1 + rand() % 4 {
            let r = rand();
            if data.len() <= 4 {
                break;
            }
            let i = 4 + (r >> 8) as usize % (data.len() - 4);
            match r % 6 {
                // Small values are the interesting ones for offsets and lengths.
                0 => data[i] = (r >> 32) as u8 % 0x81,
                1 => data[i] ^= 1 << ((r >> 32) % 8),
                2 => data[i] = 0xff,
                3 => data.truncate(i),
                4 => data.insert(i, (r >> 32) as u8),
                _ => {
                    data.remove(i);
                }
            }
        }
        for mode in [DecodeMode::Strict, DecodeMode::Lenient] {
            match decode_calldata_with(&data, mode) {
                Ok(call) => {
                    accepted += 1;
                    assert_eq!(call.params.clone().count(), call.abi.inputs.len());
                    walk(call.params);
                }
                // The work budget only exists for lenient mode's shared offsets.
                Err(e) if mode == DecodeMode::Strict => {
                    assert_ne!(e.kind(), DecodeErrorKind::TooComplex, "{}", hex_str(&data))
                }
                Err(_) => {}
            }
        }
    }
    // Some mutations (e.g. of a uint256 or bytes content) stay valid.
    assert!(
        accepted > iterations / 200,
        "only {accepted} mutations accepted"
    );
}
