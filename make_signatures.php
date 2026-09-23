<?php
require(__DIR__.'/keccak256.class.php');

// Usage:
//   php make_signatures.php            fetch the signature list from the API and
//                                      regenerate signatures.go, signatures.js and
//                                      src/signatures.rs
//   php make_signatures.php --from-js  regenerate only src/signatures.rs from the
//                                      existing signatures.js (no network access)

if (in_array('--from-js', $argv, true)) {
	$js = file_get_contents(__DIR__.'/signatures.js');
	$js = rtrim(rtrim(substr($js, strpos($js, '{'))), ';');
	$signatures = json_decode($js, true, 512, JSON_THROW_ON_ERROR);
	write_rust($signatures);
	exit(0);
}

$signatures = [];

// fetch from API
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

uasort($signatures, function($a, $b) { return $a['compact'] > $b['compact']; });

$go = fopen('signatures.go', 'w');
fwrite($go, "package evmabiless\n\n// Do not edit, automatically generated file.\n\n");
fwrite($go, "var signatures = map[MethodPrefix]*Abi{\n");

foreach($signatures as $key => $val) {
	// transform key
	if (!isset($val['name'])) {
		var_dump($val);
		exit(1);
	}
	$key = 'MethodPrefix{0x'.substr($key, 0, 2).', 0x'.substr($key, 2, 2).', 0x'.substr($key, 4, 2).', 0x'.substr($key, 6, 2).'}';
	fwrite($go, "\t$key: &Abi{\n");
	fwrite($go, "\t\tName: \"".$val['name']."\",\n");
	fwrite($go, "\t\tABI: \"".$val['abi']."\",\n");
	fwrite($go, "\t\tCompact: \"".$val['compact']."\",\n");
	if (isset($val['stateMutability']))
		fwrite($go, "\t\tStateMutability: \"".$val['stateMutability']."\",\n");
	fwrite($go, "\t\tType: \"".$val['type']."\",\n");
	fwrite($go, "\t\tInputs: []*AbiIO{\n");
	foreach($val['inputs'] as $io) {
		fwrite($go, "\t\t\t&AbiIO{\n");
		fwrite($go, "\t\t\t\tName: \"".$io['name']."\",\n");
		fwrite($go, "\t\t\t\tType: \"".$io['type']."\",\n");
		fwrite($go, "\t\t\t\tInternalType: \"".$io['internalType']."\",\n");
		if (isset($io['indexed']))
			fwrite($go, "\t\t\t\tIndexed: ".json_encode((bool)$io['indexed']).",\n");
		fwrite($go, "\t\t\t},\n");
	}
	fwrite($go, "\t\t},\n");
	if (isset($val['outputs'])) {
		fwrite($go, "\t\tOutputs: []*AbiIO{\n");
		foreach($val['outputs'] as $io) {
			fwrite($go, "\t\t\t&AbiIO{\n");
			fwrite($go, "\t\t\t\tName: \"".$io['name']."\",\n");
			fwrite($go, "\t\t\t\tType: \"".$io['type']."\",\n");
			fwrite($go, "\t\t\t\tInternalType: \"".$io['internalType']."\",\n");
			if (isset($io['indexed']))
				fwrite($go, "\t\t\t\tIndexed: ".json_encode((bool)$io['indexed']).",\n");
			fwrite($go, "\t\t\t},\n");
		}
		fwrite($go, "\t\t},\n");
	}
	fwrite($go, "\t},\n");
}

fwrite($go, "}\n");
fclose($go);

$f = fopen('signatures.js', 'w');

fwrite($f, "// Do not edit, automatically generated file.\n\n".'module.exports = '.json_encode($signatures, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES).';'."\n");

write_rust($signatures);

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

// write_rust generates src/signatures.rs. Entries are sorted by selector so
// the Rust crate can binary search them without any allocation.
function write_rust($signatures) {
	ksort($signatures, SORT_STRING);
	$kinds = ['function' => 'Function', 'event' => 'Event', 'error' => 'Error', 'constructor' => 'Constructor', 'fallback' => 'Fallback', 'receive' => 'Receive'];
	$mutabilities = ['pure' => 'Pure', 'view' => 'View', 'nonpayable' => 'NonPayable', 'payable' => 'Payable'];

	$rs = fopen(__DIR__.'/src/signatures.rs', 'w');
	fwrite($rs, "// Do not edit, automatically generated file (see make_signatures.php).\n\n");
	fwrite($rs, "use crate::{Abi, AbiIO, AbiType, MethodPrefix, StateMutability};\n\n");
	fwrite($rs, "/// Every known ABI entry, sorted by selector.\n");
	fwrite($rs, "pub(crate) static SIGNATURES: [Abi; ".count($signatures)."] = [\n");
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
