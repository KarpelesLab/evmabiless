[![GoDoc](https://godoc.org/github.com/KarpelesLab/evmabiless?status.svg)](https://godoc.org/github.com/KarpelesLab/evmabiless)
[![CI](https://github.com/KarpelesLab/evmabiless/actions/workflows/test.yml/badge.svg)](https://github.com/KarpelesLab/evmabiless/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/KarpelesLab/evmabiless/badge.svg?branch=master)](https://coveralls.io/github/KarpelesLab/evmabiless?branch=master)
[![Go Report Card](https://goreportcard.com/badge/github.com/KarpelesLab/evmabiless)](https://goreportcard.com/report/github.com/KarpelesLab/evmabiless)
[![crates.io](https://img.shields.io/crates/v/evmabiless.svg)](https://crates.io/crates/evmabiless)
[![docs.rs](https://docs.rs/evmabiless/badge.svg)](https://docs.rs/evmabiless)

# ABI-less contract invocation

Recover the ABI of a deployed EVM contract directly from its bytecode, without
the original Solidity sources or a published ABI. `evmabiless` ships a built-in
table of several hundred well-known method, event and error signatures and
matches them against the 4-byte selectors embedded in a contract's dispatch
prologue.

The library is available for Go, JavaScript and Rust. The Go and JavaScript
versions are designed to plug directly into `go-ethereum` or `ethers.js` so you
can call a contract you just discovered on-chain; the Rust crate is `no_std`
and never allocates, so it also runs on embedded and bare-metal targets.

## Installation

### Go

```sh
go get github.com/KarpelesLab/evmabiless
```

### JavaScript

```sh
npm install evmabiless
```

### Rust

```sh
cargo add evmabiless
```

## Usage

### JavaScript

`abiObjectList` returns an array of ABI fragments suitable for passing straight
to `ethers.Contract`:

```js
import { ethers } from 'ethers';
import { abiObjectList } from 'evmabiless';

const code = await provider.getCode(address);
const contract = new ethers.Contract(address, abiObjectList(code), provider);

console.log(await contract.name());
console.log(await contract.symbol());
```

Other exports:

- `abiList(code)` — human-readable ABI strings (e.g. `"function transfer(address,uint256) returns (bool)"`).
- `scanContract(code)` — raw list of method selectors. Known selectors are replaced by their compact form (`"transfer(address,uint256)"`); unknown selectors are returned as the 8-character hex hash.
- `lookupAbi(hash)` — resolve a single 8-character selector to its ABI object, or `null` if unknown.

All functions accept the contract bytecode as a hex string (with or without a
`0x` prefix).

### Go

```go
import (
    "encoding/hex"

    "github.com/KarpelesLab/evmabiless"
)

code, _ := hex.DecodeString(strings.TrimPrefix(bytecodeHex, "0x"))

for _, abi := range evmabiless.AbiList(code) {
    fmt.Println(abi.ABI)
}
```

- `ScanContract(bytecode)` returns every `MethodPrefix` (4-byte selector) found, in scan order.
- `AbiList(bytecode)` returns the `*Abi` entries for selectors that are known.
- `LookupAbi(prefix)` resolves a single selector, or returns `nil`.

Unknown selectors are silently dropped from `AbiList`; use `ScanContract` if
you need to see the raw selector hashes.

### Rust

The crate is `#![no_std]` and allocation-free: the signature table is a sorted
`static` array and scanning returns lazy iterators over the input.

```rust
use evmabiless::{abi_list_hex, lookup_abi, MethodPrefix};

// Hex straight from eth_getCode, with or without 0x; decoded on the fly.
for abi in abi_list_hex(&bytecode_hex)? {
    println!("{}", abi.abi); // function transfer(address to, uint256 value) returns (bool)
}

let transfer = lookup_abi(MethodPrefix::from_hex("a9059cbb")?).unwrap();
assert_eq!(transfer.compact, "transfer(address,uint256)");
```

- `scan_contract(&[u8])` / `scan_contract_hex(&str)` iterate over every `MethodPrefix` found, in scan order.
- `abi_list(&[u8])` / `abi_list_hex(&str)` iterate over the `&'static Abi` entries for known selectors.
- `lookup_abi(MethodPrefix)` resolves a single selector, or returns `None`.
- `signatures()` returns the whole table, sorted by selector.

Unlike the Go version, Rust `Abi` entries also carry tuple `components` and the
event `anonymous` flag.

Cargo features, all on by default, let you take only what you need:

| Feature  | Provides |
|----------|----------|
| `abi`    | The signature table, `lookup_abi`, `signatures` and the `Abi` types |
| `decode` | Calldata decoding: `decode_calldata`, `Abi::decode_input` (implies `abi`) |
| `scan`   | The bytecode scanner: `scan_contract`, `scan_contract_hex` |

`abi_list` and `abi_list_hex` need both `abi` and `scan`. A `scan`-only build
does not embed the signature table at all.

#### Decoding calldata

To show a user what a transaction does, e.g. on a hardware wallet, decode its
input data without the bytecode scanner:

```toml
evmabiless = { version = "0.1", default-features = false, features = ["decode"] }
```

```rust
use evmabiless::decode_calldata;

match decode_calldata(&tx_input) {
    Ok(call) => {
        println!("{}", call.abi.name); // transfer
        for param in call.params {
            // to: 0x1111111111111111111111111111111111111111
            // value: 1000000
            println!("{}: {}", param.io.name, param.value);
        }
    }
    Err(e) => println!("cannot decode: {e}"), // e.g. "non-zero padding at byte 4"
}
```

Decoding validates the whole calldata before returning anything, then hands
out zero-copy `Value`s (integers, addresses, bytes, strings, arrays, tuples)
borrowing from the input; walking them cannot fail. Values display integers in
decimal, addresses and bytes as `0x` hex, and strings quoted and escaped.

Anything but the canonical encoding is rejected by default: dirty padding in
any value, bools other than 0/1, invalid UTF-8, offsets that don't point where
Solidity would put the data, and trailing bytes, so every accepted calldata
has exactly one meaning. `DecodeMode::Lenient` accepts non-canonical layouts
(but still never dirty values), with the work bounded against offsets crafted
to make the decoder read the same data over and over. Errors report the kind
of problem and the byte position.

A selector is only 4 bytes, so a match in the table is a guess; an argument
encoding that does not validate against the guessed ABI is reported as an
error rather than shown.

## How it works

Solidity compiles every public / external function into a dispatch table at the
start of the contract. For each function the compiler emits:

```
DUP1
PUSH4 0xAAAAAAAA
EQ
PUSH2 0xBBBB
JUMPI
```

which on-chain is the byte sequence:

```
80 63 AA AA AA AA 14 61 BB BB 57
```

This library scans for that 11-byte pattern (equivalent regex
`/8063([0-9a-fA-F]{8})1461([0-9a-fA-F]{4})57/`), extracts the 4-byte selector,
and looks it up in the built-in signature table.

## Limitations

- Only selectors present in the built-in table can be resolved. Custom or
  obfuscated selectors come back as raw hashes (JavaScript `scanContract`) or
  are dropped (Go `AbiList`, Rust `abi_list`).
- Two different functions can theoretically share the same 4-byte selector
  (keccak256 collision); the table stores only one entry per selector.
- The scanner recognises Solidity's standard dispatch prologue. Contracts
  produced by non-standard compilers, hand-written assembly, or Vyper may not
  follow the same pattern.
- Return types are only known for functions in the built-in table — the
  library cannot infer them from bytecode alone.

A future version will parse bytecode further to recover additional metadata
such as per-function payability.

## Updating the signature table

The built-in table is regenerated from an internal ABI database via
`make_signatures.php`. Running it rewrites `signatures.go`, `signatures.js`
and `src/signatures.rs`. `php make_signatures.php --from-js` regenerates only
`src/signatures.rs` from the existing `signatures.js`, without network access.

## Releases

The Rust crate is published to crates.io by
[release-plz](https://release-plz.dev/): pushing to `master` a `Cargo.toml`
version that is not yet on crates.io publishes it and creates the matching
`vX.Y.Z` tag and GitHub Release (which Go also uses as its module version).

## License

MIT — see [LICENSE](LICENSE).
