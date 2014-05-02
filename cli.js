#!/usr/bin/env node

var generator = require("./generator");
var _ = require("underscore");

if (process.argv.length < 5) {
	console.log('usage: fbw n1, n2 n3');
	return;
}

numbers = _.map(process.argv.slice(2), function(arg) {
	return parseInt(arg, 10);
});

var gen = generator.apply(null, numbers)
for(var i = 0; i < 100; i++) {
	console.log(gen(i+1));
}
