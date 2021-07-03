/* exported capitalize */

// We need a storage for the new word.
// We need to change all words to lower case.
// We need to only change the first letter to uppercase.
// Store the new word.
// Return the new word.

function capitalize(word) {
  var newWord = '';
  var lowerCase = word.toLowerCase();
  newWord = word[0].toUpperCase() + lowerCase.slice(1);
  return newWord;
}

capitalize('CoDy');
