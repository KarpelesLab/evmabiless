[![GoDoc](https://godoc.org/github.com/KarpelesLab/evmabiless?status.svg)](https://godoc.org/github.com/KarpelesLab/evmabiless)
[![CI](https://github.com/KarpelesLab/evmabiless/actions/workflows/test.yml/badge.svg)](https://github.com/KarpelesLab/evmabiless/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/KarpelesLab/evmabiless/badge.svg?branch=master)](https://coveralls.io/github/KarpelesLab/evmabiless?branch=master)
[![Go Report Card](https://goreportcard.com/badge/github.com/KarpelesLab/evmabiless)](https://goreportcard.com/report/github.com/KarpelesLab/evmabiless)

# ABI-less contract invocation

Recover the ABI of a deployed EVM contract directly from its bytecode, without
the original Solidity sources or a published ABI. `evmabiless` ships a built-in
table of several hundred well-known method, event and error signatures and
matches them against the 4-byte selectors embedded in a contract's dispatch
prologue.

The library is available for both Go and JavaScript and is designed to plug
directly into `ethers.js` or `go-ethereum` so you can call a contract you just
discovered on-chain.

## Installation

### Go

```sh
go get github.com/KarpelesLab/evmabiless
```

### JavaScript

```sh
npm install evmabiless
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
  are dropped (Go `AbiList`).
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
`make_signatures.php`. Running it rewrites both `signatures.go` and
`signatures.js`.

## License

MIT — see [LICENSE](LICENSE).
