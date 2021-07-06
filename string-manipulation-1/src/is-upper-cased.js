/* exported isUpperCased */

// Check if the word string is equal to it when it's entirely capitalized, and if it is not, return false.
// If the word string is equal to it when it's entirely capitalized, return true.

function isUpperCased(word) {
  if (word !== word.toUpperCase()) {
    return false;
  } else {
    return true;
  }
}

isUpperCased('PHP');
