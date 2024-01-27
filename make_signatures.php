<?php
require(__DIR__.'/keccak256.class.php');

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
