/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

getNumbersToTen();

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

getEvenNumbersToTwenty();

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (count; count <= times; count++) {
    repeated += word;
  }
  return repeated;
}

repeatWord('cody', 15);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('');
logEachCharacter('Richard Watanabe');
logEachCharacter('Cody likes to code.');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

doubleAll([5, 7, 9, 11]);

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

getKeys({
  isbn: '978-1449365035',
  title: 'Speaking JS',
  author: 'Dr. Axel Rauschmayer'
});

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

getValues({
  isbn: '978-1449365035',
  title: 'Speaking JS',
  author: 'Dr. Axel Rauschmayer'
});
