/* exported firstChars */

// Prepare a empty string as storage for the final output.
// If the length parameter is larger than the characters in the string, return the string as is.
// If not, check each letter in the string passed in.
// Update the storage with the number letters of the length passed in.
// Return the stored string.

function firstChars(length, string) {
  var newString = '';
  if (string.length < length) {
    return string;
  }
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
}

firstChars(3, 'Angular'); // -> "Ang"
