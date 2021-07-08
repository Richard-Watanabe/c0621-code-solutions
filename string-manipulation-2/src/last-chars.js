/* exported lastChars */

// Prepare a storage for the new string.
// If the parameter length includes letters that are undefined, return the string as is.
// Check each letter in string for the number of times in length from the back.
// Store the the number of letters passed in from length.
// If not, return the stored letters.

function lastChars(length, string) {
  var newString = '';
  if (string[length] === undefined) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}

lastChars(3, 'Angular'); // -> "lar"
