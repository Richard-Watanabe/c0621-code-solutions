/* exported lastChars */

// Prepare a storage for the new string.
// Check each letter in string for the number of times in length from the back.
// Store the the number of letters passed in from length.
// If the parameter length includes letters that are undefined, return the string as is.
// If not, return the stored letters.

function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
    if (string[length] === undefined) {
      newString = string;
    }
  }
  return newString;
}

lastChars(3, 'Angular'); // -> "lar"
