/* exported capitalizeWord */

// We need a storage for the new string.
// We need to change all the letters in the word to lower case.
// Check if the word is 'javascript'.
// If it is, return 'JavaScript'
// If not, find the first letter in the word and capitalize it.
// Add the capitalized letter to the word that was lowercased but remove the first character in lowercase.
// Return the concatenated word.

function capitalizeWord(word) {
  var newString = '';
  newString = word.toLowerCase();
  if (newString === 'javascript') {
    return 'JavaScript';
  } else {
    newString = newString[0].toUpperCase() + newString.slice(1);
    return newString;
  }
}

capitalizeWord('broKeN');
