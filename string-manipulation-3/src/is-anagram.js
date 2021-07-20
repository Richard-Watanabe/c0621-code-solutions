/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var newFirstString = firstString.split(' ').join('');
  var newSecondString = secondString.split(' ').join('');
  var finalFirstString = newFirstString.split('');
  var finalSecondString = newSecondString.split('');
  for (var i = 0; i < finalFirstString.length; i++) {
    if (finalFirstString[i] === finalSecondString[i]) {
      return true;
    }
  }
  return false;
}
