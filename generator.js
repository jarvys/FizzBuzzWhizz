var _ = require("underscore");

function multipleOfFirst(fn) {
	return function(num) {
		return _.isFunction(fn) ? 'Fizz' + fn.call(null, num) : 'Fizz';
	};
}

function multipleOfSecond(fn) {
	return function(num) {
		return _.isFunction(fn) ? 'Buzz' + fn.call(null, num) : 'Buzz';
	}
}

function multipleOfThird(fn) {
	return function(num) {
		return _.isFunction(fn) ? 'Whizz' + fn.call(null, num) : 'Whizz';
	}
}

function contains(num, n) {
	if (num === 0) {
		return false;
	}

	var digit = num % 10;
	return digit === n || contains(Math.floor(num / 10), n);
}

function isNormal(num, n1, n2, n3) {
	return _.every([n1, n2, n3], function(n) {
		return num % n !== 0;
	});
}

function generator(n1, n2, n3) {
	return function(num) {
		if (contains(num, n1)) {
			return 'Fizz';
		}

		if (isNormal(num, n1, n2, n3)) {
			return num;
		}

		var result = null;

		if(num % n3 === 0) {
			result = multipleOfThird(result);
		}

		if(num % n2 === 0) {
			result = multipleOfSecond(result);
		}

		if(num % n1 === 0) {
			result =  multipleOfFirst(result);
		}

		return result(num);
	};
}

module.exports = generator;

generator.isNormal = isNormal;
generator.multipleOfFirst = multipleOfFirst;
generator.multipleOfSecond = multipleOfSecond;
generator.multipleOfThird = multipleOfThird;
generator.contains = contains;
