<?php
require(__DIR__.'/keccak256.class.php');

// Functions included in src/signatures_common.rs (the `common-signatures`
// feature): the operations wallets sign most, from the main token standards
// and WETH.
const COMMON_SIGNATURES = [
	// ERC-20, plus the widespread allowance helpers and ERC-2612 permit
	'transfer(address,uint256)',
	'transferFrom(address,address,uint256)', // also ERC-721
	'approve(address,uint256)', // also ERC-721
	'increaseAllowance(address,uint256)',
	'decreaseAllowance(address,uint256)',
	'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)',
	// ERC-721
	'safeTransferFrom(address,address,uint256)',
	'safeTransferFrom(address,address,uint256,bytes)',
	'setApprovalForAll(address,bool)', // also ERC-1155
	// ERC-1155
	'safeTransferFrom(address,address,uint256,uint256,bytes)',
	'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
	// WETH9 (wrapped ether; see EXTRA_SIGNATURES)
	'deposit()',
	'withdraw(uint256)',
];

// Signatures missing from the API database, added to every generated table.
// Same format as the API; the selector is computed from `compact`.
const EXTRA_SIGNATURES = [
	// WETH9 (wrapped ether)
	[
		'abi' => 'function deposit()',
		'compact' => 'deposit()',
		'inputs' => [],
		'name' => 'deposit',
		'outputs' => [],
		'stateMutability' => 'payable',
		'type' => 'function',
	],
	[
		'abi' => 'function withdraw(uint256 wad)',
		'compact' => 'withdraw(uint256)',
		'inputs' => [['internalType' => 'uint256', 'name' => 'wad', 'type' => 'uint256']],
		'name' => 'withdraw',
		'outputs' => [],
		'stateMutability' => 'nonpayable',
		'type' => 'function',
	],
];

// Usage:
//   php make_signatures.php            fetch the signature list from the API and
//                                      regenerate signatures.go, signatures.js and
//                                      the Rust tables in src/
//   php make_signatures.php --from-js  regenerate the same files from the
//                                      existing signatures.js (no network access)

if (in_array('--from-js', $argv, true)) {
	$js = file_get_contents(__DIR__.'/signatures.js');
	$js = rtrim(rtrim(substr($js, strpos($js, '{'))), ';');
	$signatures = json_decode($js, true, 512, JSON_THROW_ON_ERROR);
} else {
	$signatures = fetch_signatures();
}

foreach(EXTRA_SIGNATURES as $abi) {
	ksort($abi);
	$signatures[substr(Keccak256::hash($abi['compact'], 256), 0, 8)] = $abi;
}

uasort($signatures, function($a, $b) { return strcmp($a['compact'], $b['compact']); });

write_go($signatures);
write_js($signatures);
write_rust($signatures);

// fetch_signatures returns every signature of the API database, keyed by
// selector.
function fetch_signatures() {
	$signatures = [];
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$page_no = 0;
	while(true) {
		curl_setopt($ch, CURLOPT_URL, 'https://ws.atonline.com/_special/rest/EVM/ABI?page_no='.++$page_no);
		$res = curl_exec($ch);
		$data = json_decode($res, true);
		if ($data['result'] != 'success') throw new Exception('error occured');
		$data = $data['data'];
		if (!$data) break;

		foreach($data as $abi) {
			$hash = $abi['hash'];
			unset($abi['hash']);
			ksort($abi);
			$signatures[substr($hash, 0, 8)] = $abi;
		}
	}
	return $signatures;
}

// go_io writes the Go literal of an ABI parameter.
function go_io($go, $io) {
	fwrite($go, "\t\t\t&AbiIO{\n");
	fwrite($go, "\t\t\t\tName: \"".$io['name']."\",\n");
	fwrite($go, "\t\t\t\tType: \"".$io['type']."\",\n");
	fwrite($go, "\t\t\t\tInternalType: \"".$io['internalType']."\",\n");
	if (isset($io['indexed']))
		fwrite($go, "\t\t\t\tIndexed: ".json_encode((bool)$io['indexed']).",\n");
	fwrite($go, "\t\t\t},\n");
}

// write_go generates signatures.go, formatted with gofmt when available.
function write_go($signatures) {
	$go = fopen(__DIR__.'/signatures.go', 'w');
	fwrite($go, "package evmabiless\n\n// Do not edit, automatically generated file.\n\n");
	fwrite($go, "var signatures = map[MethodPrefix]*Abi{\n");

	foreach($signatures as $key => $val) {
		$key = (string)$key;
		if (!isset($val['name'])) {
			var_dump($val);
			exit(1);
		}
		$key = 'MethodPrefix{0x'.implode(', 0x', str_split($key, 2)).'}';
		fwrite($go, "\t$key: &Abi{\n");
		fwrite($go, "\t\tName: \"".$val['name']."\",\n");
		fwrite($go, "\t\tABI: \"".$val['abi']."\",\n");
		fwrite($go, "\t\tCompact: \"".$val['compact']."\",\n");
		if (isset($val['stateMutability']))
			fwrite($go, "\t\tStateMutability: \"".$val['stateMutability']."\",\n");
		fwrite($go, "\t\tType: \"".$val['type']."\",\n");
		fwrite($go, "\t\tInputs: []*AbiIO{\n");
		foreach($val['inputs'] as $io) go_io($go, $io);
		fwrite($go, "\t\t},\n");
		if (isset($val['outputs'])) {
			fwrite($go, "\t\tOutputs: []*AbiIO{\n");
			foreach($val['outputs'] as $io) go_io($go, $io);
			fwrite($go, "\t\t},\n");
		}
		fwrite($go, "\t},\n");
	}

	fwrite($go, "}\n");
	fclose($go);
	passthru('gofmt -w '.escapeshellarg(__DIR__.'/signatures.go').' 2>/dev/null');
}

// write_js generates signatures.js.
function write_js($signatures) {
	file_put_contents(__DIR__.'/signatures.js', "// Do not edit, automatically generated file.\n\n".'module.exports = '.json_encode($signatures, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES).';'."\n");
}

// rust_str returns $s as a Rust string literal.
function rust_str($s) {
	$s = (string)$s;
	if (preg_match('/[\x00-\x1f\x7f]/', $s)) throw new Exception('control character in '.json_encode($s));
	return '"'.addcslashes($s, '\\"').'"';
}

// rust_io returns a Rust slice expression for a list of ABI parameters.
function rust_io($list, $indent) {
	if (!$list) return '&[]';
	$pad = str_repeat("\t", $indent);
	$res = "&[\n";
	foreach($list as $io) {
		$res .= "$pad\tAbiIO {\n";
		$res .= "$pad\t\tname: ".rust_str($io['name']).",\n";
		$res .= "$pad\t\tty: ".rust_str($io['type']).",\n";
		$res .= "$pad\t\tinternal_type: ".rust_str($io['internalType']).",\n";
		$res .= "$pad\t\tindexed: ".json_encode((bool)($io['indexed'] ?? false)).",\n";
		$res .= "$pad\t\tcomponents: ".rust_io($io['components'] ?? [], $indent + 2).",\n";
		$res .= "$pad\t},\n";
	}
	return $res."$pad]";
}

// write_rust generates src/signatures.rs with every signature, and
// src/signatures_common.rs with COMMON_SIGNATURES only.
function write_rust($signatures) {
	write_rust_table(__DIR__.'/src/signatures.rs', 'Every known ABI entry', $signatures);

	$common = [];
	foreach($signatures as $key => $val) {
		if ($val['type'] == 'function' && in_array($val['compact'], COMMON_SIGNATURES, true))
			$common[$key] = $val;
	}
	$missing = array_diff(COMMON_SIGNATURES, array_column($common, 'compact'));
	if ($missing) throw new Exception('common signatures not found: '.implode(', ', $missing));
	write_rust_table(__DIR__.'/src/signatures_common.rs', 'The most common token operations', $common);
}

// write_rust_table writes a Rust table of signatures to $path. Entries are
// sorted by selector so the Rust crate can binary search them without any
// allocation.
function write_rust_table($path, $description, $signatures) {
	ksort($signatures, SORT_STRING);
	$kinds = ['function' => 'Function', 'event' => 'Event', 'error' => 'Error', 'constructor' => 'Constructor', 'fallback' => 'Fallback', 'receive' => 'Receive'];
	$mutabilities = ['pure' => 'Pure', 'view' => 'View', 'nonpayable' => 'NonPayable', 'payable' => 'Payable'];

	$rs = fopen($path, 'w');
	fwrite($rs, "// Do not edit, automatically generated file (see make_signatures.php).\n\n");
	fwrite($rs, "use crate::{Abi, AbiIO, AbiType, MethodPrefix, StateMutability};\n\n");
	fwrite($rs, "/// $description, sorted by selector.\n");
	fwrite($rs, "pub(crate) static SIGNATURES: [Abi<'static>; ".count($signatures)."] = [\n");
	foreach($signatures as $key => $val) {
		$key = (string)$key;
		if (!preg_match('/^[0-9a-f]{8}$/', $key)) throw new Exception('invalid selector '.$key);
		if (!isset($kinds[$val['type']])) throw new Exception('unknown ABI type '.$val['type']);
		$mut = 'None';
		if (isset($val['stateMutability'])) {
			if (!isset($mutabilities[$val['stateMutability']])) throw new Exception('unknown state mutability '.$val['stateMutability']);
			$mut = 'Some(StateMutability::'.$mutabilities[$val['stateMutability']].')';
		}
		fwrite($rs, "\tAbi {\n");
		fwrite($rs, "\t\tselector: MethodPrefix([0x".implode(', 0x', str_split($key, 2))."]),\n");
		fwrite($rs, "\t\tname: ".rust_str($val['name']).",\n");
		fwrite($rs, "\t\tabi: ".rust_str($val['abi']).",\n");
		fwrite($rs, "\t\tcompact: ".rust_str($val['compact']).",\n");
		fwrite($rs, "\t\tkind: AbiType::".$kinds[$val['type']].",\n");
		fwrite($rs, "\t\tstate_mutability: $mut,\n");
		fwrite($rs, "\t\tanonymous: ".json_encode((bool)($val['anonymous'] ?? false)).",\n");
		fwrite($rs, "\t\tinputs: ".rust_io($val['inputs'], 2).",\n");
		fwrite($rs, "\t\toutputs: ".rust_io($val['outputs'] ?? [], 2).",\n");
		fwrite($rs, "\t},\n");
	}
	fwrite($rs, "];\n");
	fclose($rs);
}
