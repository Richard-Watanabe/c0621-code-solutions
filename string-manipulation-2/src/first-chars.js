/* exported firstChars */

// Prepare a empty string as storage for the final output.
// Check each letter in the string passed in.
// Update the storage with the number letters of the length passed in.
// If the length parameter is larger than the characters in the string, return the string as is.
// If not, return the stored string.

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string[i];
    if (string.length < length) {
      newString = string;
    }
  }
  return newString;
}

firstChars(3, 'Angular'); // -> "Ang"
