'use strict';

signatures = require('./signatures');

module.exports.scanContract = function(code) {
	let res = [];

	// match our regexp
	const matches = code.matchAll(/8063([0-9a-fA-F]{8})1461([0-9a-fA-F]{4})57/g);
	for (const match of match) {
		let f = match[1]; // keccak256 hash of function signature
		if (f in signatures) {
			f = signatures[f];
		}
		res.push(f);
	}

	return res;
};
