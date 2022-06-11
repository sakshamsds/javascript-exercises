const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        // console.log(person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear());
        current.yearOfDeath = current.yearOfDeath ? current.yearOfDeath : new Date().getFullYear();
        oldest.yearOfDeath = oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear();
        return (current.yearOfDeath - current.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
