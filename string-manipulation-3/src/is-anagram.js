/* exported isAnagram */

// We need to remove any spaces in the two string and sort the letters in alphabetical order, and store the new strings in a separate storage.
// We need to check if the storage is equal to each other.
// If it is, return true.
// If not, return false.

function isAnagram(firstString, secondString) {
  var newFirstString = firstString.split(' ').join('').split('').sort().join('');
  var newSecondString = secondString.split(' ').join('').split('').sort().join('');
  if (newFirstString === newSecondString) {
    return true;
  } else {
    return false;
  }
}
