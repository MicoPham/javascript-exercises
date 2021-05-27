const sumAll = function() {
    if ((arguments[0] < 0) || (arguments[1] < 0) || (typeof(arguments[0]) !== "number") || (typeof(arguments[1]) !== "number")) {
        return "ERROR";
    }


    var sum = 0;
    if (arguments[0] < arguments[1]) {
        for (var i = arguments[0]; i <= arguments[1]; i++) {
        sum += i;
    }
    return sum;
    } else {
        for (var i = arguments[0]; i >= arguments[1]; i--) {
            sum += i;
    }
    return sum;
};
}

module.exports = sumAll;
