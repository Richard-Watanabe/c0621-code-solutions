/* exported truncate */

// We need a storage for the new string.
// We need to check each character in string and first make sure a character exists in each position of the length.
// We need to store the found characters in the new string.
// We need to add ... to the new string.
// We need to return the new string.

function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string[i] !== undefined) {
      newString += string[i];
    }
  }
  newString += '...';
  return newString;
}

truncate(8, 'All Code All Day');
