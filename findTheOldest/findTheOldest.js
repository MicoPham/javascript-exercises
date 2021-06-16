const findTheOldest = function() {
    return arguments[0].reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge > currentAge ? oldest : current;
    })
};

function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
return death - birth;
};

module.exports = findTheOldest;
