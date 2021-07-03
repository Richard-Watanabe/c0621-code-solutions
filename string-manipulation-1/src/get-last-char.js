/* exported getLastChar */

// We need a storage for the last character.
// We need to find the last character in the string and store it.
// We need to return the last character that was found.

function getLastChar(string) {
  var lastCharacter = '';
  lastCharacter = string[string.length - 1];
  return lastCharacter;
}

getLastChar('Cody');
