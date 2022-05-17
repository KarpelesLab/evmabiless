<?php
require(__DIR__.'/kecack256.class.php');

$signatures = [];
$in = fopen(__DIR__.'/known_abi.sol', 'r');
if (!$in) die("no file\n");

$buf = '';
while(!feof($in)) {
	$l = fgets($in);
	$l = trim($l);
	$p = strpos($l, '//');
	if ($p !== false) $l = trim(substr($l, 0, $p));
	if ($l == '') continue;
	$buf = trim($buf.' '.$l);

	while(($p = strpos($buf, ';')) !== false) {
		$def = trim(substr($buf, 0, $p));
		$buf = trim(substr($buf, $p+1));

		// replace any spaces/tabs/etc with a single space
		$def = preg_replace('/\s+/', ' ', $def);
		$func = ['inputs' => [], 'name' => '', 'outputs' => [], 'stateMutability' => 'nonPayable'];

		// we have a string such as: function transferFrom(address from, address to, uint256 amount) external returns (bool)
		// we want to convert this to: transferFrom(address,address,uint256)
		$p = strpos($def, ' ');
		if ($p === false) throw new \Exception('invalid abi');
		$func['type'] = substr($def, 0, $p); // function|event
		$abi = substr($def, $p+1); // transferFrom(...

		$p = strpos($abi, '(');
		if ($p === false) throw new \Exception('invalid abi');
		$args = trim(substr($abi, $p+1));
		$func['name'] = trim(substr($abi, 0, $p));
		$abi = trim(substr($abi, 0, $p)).'('; // "transferFrom"

		$p = strpos($args, ')');
		if ($p === false) throw new \Exception('invalid abi');
		$postArgs = trim(substr($args, $p+1));
		$args = trim(substr($args, 0, $p));
		$args = explode(',', $args);

		$first = true;
		foreach($args as $arg) {
			$arg = trim($arg);
			if ($arg === '') {
				if (!$first) throw new \Exception('invalid abi');
				$first = false;
				continue; // might be a function with just ()
			}
			$parts = preg_split('/\\s/', $arg);
			$argname = '';
			foreach($parts as $np => $val) {
				if (($val == 'memory') || ($val == 'calldata')) {
					continue;
				}
				if ($np == 0) {
					$arg = $val;
					continue;
				}
				$argname = $val;
			}
			$abi .= ($first?'':',').$arg;
			$first = false;
			$func['inputs'][] = ['internalType' => $arg, 'name' => $argname, 'type' => $arg];
		}
		$abi .= ')';
		$hash = \Keccak256::hash($abi, 256);

		// check for returns
		$p = strpos($postArgs, 'returns');
		if ($p !== false) {
			$p += 7; // skip "returns"
			$returns = trim(substr($postArgs, $p)); // should contain "(...)"
			if ((substr($returns, 0, 1) != '(') || (substr($returns, -1) != ')'))
				throw new \Exception('invalid abi returns value');
			$returns = substr($returns, 1, -1);
			$returns = explode(',', $returns);

			$first = true;
			foreach($returns as $return) {
				$return = trim($return);
				if ($return === '') {
					if (!$first) throw new \Exception('invalid abi');
					$first = false;
					continue; // might be a function with just ()
				}
				$parts = preg_split('/\\s/', $return);
				$returnname = '';
				foreach($parts as $np => $val) {
					if ($val == 'memory') continue; // keyword
					if ($val == 'calldata') continue; // keyword
					if ($np == 0) {
						// type
						$return = $val;
						continue;
					}
					$returnname = $val;
				}
				$first = false;
				$func['outputs'][] = ['internalType' => $return, 'name' => $returnname, 'type' => $return];
			}
		}

		// try to detect if payable, view, pure, etc
		if (strpos($postArgs, 'payable') !== false) {
			$func['stateMutability'] = 'payable';
		} else if (strpos($postArgs, 'view') !== false) {
			$func['stateMutability'] = 'view';
		} else if (strpos($postArgs, 'pure') !== false) {
			$func['stateMutability'] = 'pure';
		}

		// if type=function, need stateMutability=nonpayable|view
		$func['abi'] = $def;
		$func['compact'] = $abi;
		ksort($func);

		$signatures[substr($hash, 0, 8)] = $func;
	}
}
if ($buf !== '') die("missing ; at end of known_abi.sol ?\n");

uasort($signatures, function($a, $b) { return $a['compact'] > $b['compact']; });

$f = fopen('signatures.js', 'w');

fwrite($f, "// Do not edit, automatically generated file.\n\n".'module.exports = '.json_encode($signatures, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES).';'."\n");
