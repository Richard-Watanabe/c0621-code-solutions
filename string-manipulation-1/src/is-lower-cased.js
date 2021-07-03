/* exported isLowerCased */

// Check if the word is strictly different or not when it is completely lower cased.
// If it is differenct, return false.
// If is is not differenct, retun true.

function isLowerCased(word) {
  if (word !== word.toLowerCase()) {
    return false;
  } else {
    return true;
  }
}

isLowerCased('cody');
