# Changelog

All notable changes to the Rust crate will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Breaking:** the `abi` feature is renamed `signatures` and only gates the
  built-in table (`lookup_abi`, `signatures`). `decode` no longer requires
  it: `Abi::decode_input` works with caller-supplied ABIs, while
  `decode_calldata` needs both `decode` and `signatures`.
- **Breaking:** `Abi` and `AbiIO` are always available and take a lifetime
  (`Abi<'a>`, `AbiIO<'a>`; the built-in table is `Abi<'static>`), so ABIs can
  borrow data received at run time.

### Added

- `common-signatures` feature: the table functions (`lookup_abi`,
  `decode_calldata`, `abi_list`…) with a small table of the most common
  operations instead of every known signature.
- WETH `deposit()` and `withdraw(uint256)` in the signature tables (Rust, Go
  and JavaScript).
- `const` constructors `Abi::new` and `AbiIO::new`, with `with_*` setters, so
  ABIs can be defined as `static`s or built at run time.

## [0.1.16] - 2026-09-23

### Added

- Rust crate: `no_std`, allocation-free port of the Go/JavaScript library
  (`scan_contract`, `abi_list`, `lookup_abi`, plus `*_hex` variants that scan
  hex strings without decoding them into a buffer).
- `abi` and `scan` Cargo features (both default) so the signature table and
  the bytecode scanner can each be used on their own.
- `MethodPrefix::from_calldata` to get the selector of a transaction.
- `decode` Cargo feature (default): `decode_calldata` and `Abi::decode_input`
  validate calldata against the ABI, rejecting non-canonical encodings by
  default (`DecodeMode::Lenient` relaxes the layout checks), and decode the
  arguments into zero-copy `Value`s, still without allocating.
