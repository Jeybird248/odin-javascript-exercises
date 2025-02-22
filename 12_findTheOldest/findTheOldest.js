const findTheOldest = function(people) {
    let oldestPerson = people[0];

    for (let i = 1; i < people.length; i++) {
        const currentPerson = people[i];
        const currentAge = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;
        const oldestAge = oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : new Date().getFullYear() - oldestPerson.yearOfBirth;
        console.log(currentAge, oldestAge);
        if (currentAge > oldestAge) {
            oldestPerson = currentPerson;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
