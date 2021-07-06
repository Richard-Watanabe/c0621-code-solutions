/* exported getWords */

// If the string is empty, return an empty array.
// If the string

function getWords(string) {
  var splitWords = string.split(' ');
  if (string === '') {
    return [];
  }
  return splitWords;
}
