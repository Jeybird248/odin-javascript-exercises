const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function() {
	let arr = arguments[0];
  output = 0;
  for(let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
};

const multiply = function() {
  let arr = arguments[0];
  output = arr[0];
  for(let i = 1; i < arr.length; i++) {
    output *= arr[i];
  }
  return output;
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(first) {
  if(first <= 1) {
    return 1;
  }
  return first * factorial(first - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
