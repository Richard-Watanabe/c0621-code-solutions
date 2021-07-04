/* exported ransomCase */

// We need a storage for the new string.
// We need to check through each letter.
// If the index of the letter is even, change the letter to a lowercase and store it.
// Otherwise, change the letter to uppercase, and store it.
// Return the storage.

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

ransomCase('WaldO');
