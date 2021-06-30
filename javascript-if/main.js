/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

isUnderFive(4);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(6);

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

startsWithJ('Cody');

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var cody = {
  name: 'Cody Miller',
  age: 14
};

isOldEnoughToDrink(cody);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

isOldEnoughToDrive(cody);

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

isOldEnoughToDrinkAndDrive(cody);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

categorizeAcidity(13);

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}

introduceWarnerBro('dot');
