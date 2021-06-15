const palindromes = function () {
    let filtered = arguments[0].toLowerCase().replace(/[^A-Za-z]/g, '');
    let newStr = filtered.split('');
    newStr = newStr.reverse();
    newStr = newStr.join('');
    
    return (newStr === filtered);
};

module.exports = palindromes;
