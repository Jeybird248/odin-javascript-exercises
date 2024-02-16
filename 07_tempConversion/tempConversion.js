const convertToCelsius = function() {
  let f = arguments[0];
  return Math.round(((f - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function() {
  let celcius = arguments[0];
  return Math.round((celcius * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
