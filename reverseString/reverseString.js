const reverseString = function(string) {
  var arr = string.split("");
  var reverseArr = [];

  for (i = 0; i < arr.length; i++) {
    reverseArr.unshift(arr[i]);
  }
  return reverseArr.join("");
};

module.exports = reverseString;
