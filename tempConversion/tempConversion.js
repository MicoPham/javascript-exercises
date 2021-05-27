const ftoc = function() {
  var result = ((arguments[0] - 32) * (5/9));
  return Math.round(result * 10) / 10;
};

const ctof = function() {
  var result = (arguments[0] * (9/5) + 32);
  return Math.round(result * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
