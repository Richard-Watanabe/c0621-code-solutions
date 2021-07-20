/* exported isPalindromic */

// Remove spaces from the string.
// Get the reversed version of the string.
// Check if the reversed version of the string is the same as the original string with spaces removed.
// If it is the same, return true.
// If not, return false.

function isPalindromic(string) {
  var newString = string.split(' ').join('');
  var reversed = '';
  for (var i = newString.length - 1; i >= 0; i--) {
    reversed += newString[i];
  }
  if (newString === reversed) {
    return true;
  } else {
    return false;
  }
}

isPalindromic('taco cat');
