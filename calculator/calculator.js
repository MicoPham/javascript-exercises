const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
	let sum = 0;
  arguments[0].forEach(value => {
  sum += value;
  })
  return sum;
};

const multiply = function() {
	let sum = 1;
  arguments[0].forEach(value => {
  sum *= value;
  })
  return sum;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	if (arguments[0] === 0) {
    return 1;
  }
  let sum = 1;
  for (let i = arguments[0]; i > 1; i--) {
  sum *= i;
  }
  return sum;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
