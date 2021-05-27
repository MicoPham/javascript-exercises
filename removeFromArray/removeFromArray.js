const removeFromArray = function(...args) {
    var arr = arguments[0];
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

module.exports = removeFromArray;
