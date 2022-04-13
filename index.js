'use strict';

const signatures = require('./signatures');

const byteCodeMethodRegexp = /8063([0-9a-fA-F]{8})1461([0-9a-fA-F]{4})57/g;

module.exports.scanContract = function(code) {
	let res = [];

	// match our regexp
	const matches = code.matchAll(byteCodeMethodRegexp);
	for (const match of matches) {
		let f = match[1]; // keccak256 hash of function signature
		if (f in signatures) {
			f = signatures[f].compact;
		}
		res.push(f);
	}

	return res;
};

// abiList returns an array of Human-Readable ABI, such as what ethers.js accepts as input
// Unknown ABIs will not be returned.
module.exports.abiList = function(code) {
	let res = [];

	// match our regexp
	const matches = code.matchAll(byteCodeMethodRegexp);
	for (const match of matches) {
		let f = match[1]; // keccak256 hash of function signature
		if (f in signatures) {
			res.push(signatures[f].abi);
		}
	}

	return res;
};
