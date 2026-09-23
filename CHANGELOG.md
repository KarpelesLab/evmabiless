# Changelog

All notable changes to the Rust crate will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
