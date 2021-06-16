const fibonacci = function() {
    if (arguments[0] < 0) {
        return "OOPS";
    }

    if (arguments[0] === 0) {
        return 0;
    }

    let previous = 0;
    let current = 1;

    for (let i = 1; i < arguments[0]; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
};

module.exports = fibonacci;
