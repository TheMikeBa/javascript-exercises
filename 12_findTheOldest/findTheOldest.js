const findTheOldest = function (group) {
  //   group.sort((a, b) => {
  //     return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
  //   });

  //   group.forEach((person) =>
  //     person.yearOfDeath && person.yearOfBirth
  //       ? (person.age = person.yearOfDeath - person.yearOfBirth)
  //       : (person.age = null)
  //   );

  group.forEach((person) =>
    person.yearOfBirth
      ? person.yearOfDeath
        ? (person.age = person.yearOfDeath - person.yearOfBirth)
        : (person.age = new Date().getFullYear() - person.yearOfBirth)
      : null
  );

  group.sort((a, b) => b.age - a.age);

  return group[0];
};

// Do not edit below this line
module.exports = findTheOldest;
