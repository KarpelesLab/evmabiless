<?php
require(__DIR__.'/kecack256.class.php');

$signatures = [];
$in = fopen('methods.txt', 'r');
if (!$in) die("no file\n");

while(!feof($in)) {
	$l = fgets($in);
	if (!$l) continue;
	if (substr($l, 0, 2) == '//') continue;
	$l = trim($l);

	$hash = \Keccak256::hash($l, 256);
	$signatures[substr($hash, 0, 8)] = $l;
}

asort($signatures);

$f = fopen('signatures.js', 'w');

fwrite($f, 'module.exports='.json_encode($signatures, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES).';'."\n");
