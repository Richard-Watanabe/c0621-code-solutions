/* exported truncate */

// We need a storage for the new string.
// If the length paramater is larger than the number of characters in the string, return the string plus the ...
// If not, need to check each character in the string.
// We need to store the found characters in the new string.
// We need to add ... to the new string.
// We need to return the new string.

function truncate(length, string) {
  var newString = '';
  if (string.length < length) {
    return string + '...';
  }
  for (var i = 0; i < length; i++) {
    newString = newString + string[i];
  }
  newString += '...';
  return newString;
}

truncate(8, 'All Code All Day');
