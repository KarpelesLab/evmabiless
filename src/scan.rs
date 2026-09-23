use core::iter::FusedIterator;

#[cfg(feature = "abi")]
use crate::{Abi, lookup_abi};
use crate::{HexError, MethodPrefix, hex_val, strip_0x};

/// Length in bytes of the Solidity dispatch entry we scan for:
/// `DUP1 PUSH4 <selector> EQ PUSH2 <dest> JUMPI` = `80 63 SSSSSSSS 14 61 DDDD 57`.
const DISPATCH_PATTERN_LEN: usize = 11;

/// Scans raw EVM bytecode and returns every 4-byte method selector referenced
/// by a Solidity-style dispatch entry:
///
/// ```text
/// DUP1 (0x80) PUSH4 (0x63) <selector> EQ (0x14) PUSH2 (0x61) <dest> JUMPI (0x57)
/// ```
///
/// Selectors are yielded in scan order and may repeat, for example when
/// creation bytecode embeds its runtime bytecode. Overlapping entries are
/// found as well.
pub fn scan_contract(bytecode: &[u8]) -> ScanContract<'_> {
    ScanContract {
        src: Source::Bytes(bytecode),
        pos: 0,
    }
}

/// Like [`scan_contract`], but reads the bytecode from a hex string (with or
/// without a `0x` prefix), decoding it on the fly.
///
/// The whole string is validated first: it must contain an even number of
/// hex digits.
pub fn scan_contract_hex(bytecode: &str) -> Result<ScanContract<'_>, HexError> {
    let hex = strip_0x(bytecode.as_bytes());
    if hex.len() % 2 != 0 {
        return Err(HexError::InvalidLength);
    }
    if !hex.iter().all(|&c| hex_val(c).is_some()) {
        return Err(HexError::InvalidCharacter);
    }
    Ok(ScanContract {
        src: Source::Hex(hex),
        pos: 0,
    })
}

/// Scans the bytecode and returns the ABI of every known selector found, in
/// scan order. Unknown selectors are skipped; use [`scan_contract`] to see
/// them.
#[cfg(feature = "abi")]
pub fn abi_list(bytecode: &[u8]) -> AbiList<'_> {
    AbiList {
        scan: scan_contract(bytecode),
    }
}

/// Like [`abi_list`], but reads the bytecode from a hex string (see
/// [`scan_contract_hex`]).
#[cfg(feature = "abi")]
pub fn abi_list_hex(bytecode: &str) -> Result<AbiList<'_>, HexError> {
    Ok(AbiList {
        scan: scan_contract_hex(bytecode)?,
    })
}

#[derive(Clone, Debug)]
enum Source<'a> {
    Bytes(&'a [u8]),
    /// Validated hex digits, even length, no prefix.
    Hex(&'a [u8]),
}

impl Source<'_> {
    fn len(&self) -> usize {
        match self {
            Source::Bytes(b) => b.len(),
            Source::Hex(h) => h.len() / 2,
        }
    }

    fn get(&self, i: usize) -> u8 {
        match self {
            Source::Bytes(b) => b[i],
            Source::Hex(h) => match (hex_val(h[2 * i]), hex_val(h[2 * i + 1])) {
                (Some(hi), Some(lo)) => (hi << 4) | lo,
                // Unreachable: the input was validated in scan_contract_hex.
                _ => 0,
            },
        }
    }
}

/// Iterator over the selectors found in bytecode, returned by
/// [`scan_contract`] and [`scan_contract_hex`].
#[derive(Clone, Debug)]
pub struct ScanContract<'a> {
    src: Source<'a>,
    pos: usize,
}

impl Iterator for ScanContract<'_> {
    type Item = MethodPrefix;

    fn next(&mut self) -> Option<MethodPrefix> {
        let len = self.src.len();
        while self.pos + DISPATCH_PATTERN_LEN <= len {
            let i = self.pos;
            // Only step one byte at a time (rather than past the whole
            // pattern) so overlapping entries are not missed when the
            // selector itself contains 0x80 0x63.
            self.pos += 1;
            let s = &self.src;
            if s.get(i) == 0x80
                && s.get(i + 1) == 0x63
                && s.get(i + 6) == 0x14
                && s.get(i + 7) == 0x61
                && s.get(i + 10) == 0x57
            {
                self.pos = i + 2;
                return Some(MethodPrefix([
                    s.get(i + 2),
                    s.get(i + 3),
                    s.get(i + 4),
                    s.get(i + 5),
                ]));
            }
        }
        self.pos = len;
        None
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        let remaining = self.src.len().saturating_sub(self.pos);
        (0, Some(remaining / 2))
    }
}

impl FusedIterator for ScanContract<'_> {}

/// Iterator over the known ABIs found in bytecode, returned by [`abi_list`]
/// and [`abi_list_hex`].
#[derive(Clone, Debug)]
#[cfg(feature = "abi")]
pub struct AbiList<'a> {
    scan: ScanContract<'a>,
}

#[cfg(feature = "abi")]
impl Iterator for AbiList<'_> {
    type Item = &'static Abi;

    fn next(&mut self) -> Option<&'static Abi> {
        self.scan.find_map(lookup_abi)
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        (0, self.scan.size_hint().1)
    }
}

#[cfg(feature = "abi")]
impl FusedIterator for AbiList<'_> {}
