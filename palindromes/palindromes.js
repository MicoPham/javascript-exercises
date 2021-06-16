const palindromes = function () {
    let filtered = arguments[0].toLowerCase().replace(/[^A-Za-z]/g, '');
    return filtered === filtered.split('').reverse().join('');
};

module.exports = palindromes;
