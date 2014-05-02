var assert = require('assert');
var generator = require("./generator");
var contains = generator.contains;
var isNormal = generator.isNormal;

it('test contains', function() {
	assert.equal(contains(13, 3), true);
	assert.equal(contains(78, 7), true);
	assert.equal(contains(78, 2), false);
});

it('test isNormal', function() {
	assert.equal(isNormal(13, 3, 5, 7), true);
	assert.equal(isNormal(12, 3, 5, 7), false);
});

it('number off nomralNumber', function() {
	var gen = generator(3, 5, 7);
	assert.equal(gen(19), '19');

	assert.equal(gen(13), 'Fizz', 'number contains 3');
	assert.equal(gen(6), 'Fizz', 'multiple of 3');
	assert.equal(gen(5), 'Buzz', 'multiple of 5');
	assert.equal(gen(14), 'Whizz', 'multiple of 7');

	assert.equal(gen(15), 'FizzBuzz', 'multiple of 3 and 5');
	assert.equal(gen(70), 'BuzzWhizz', 'multiple of 5 and 7');
	assert.equal(gen(21), 'FizzWhizz', 'multiple of 3 and 7');

	var gen = generator(2, 3, 5);
	assert.equal(gen(60), 'FizzBuzzWhizz', 'multiple of 2, 3 and 5');
});
