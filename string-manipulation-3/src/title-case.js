/* exported titleCase */

// Prepare an array of minor short words.
// Split each word in the string by space and store them in an array.
// For each item in the array, check:
// - If the word is api. If so, change it to API.
// - If the word is javascript and has a : on the end, make it JavaScript:. If no : make it JavaScript.
// - If the word is not in the shortWords array, capitalize the first letter.
// - If the word has a colon, capitilize the first letter after colon.
// - If the word has a dash, make sure the letter after the dash is capitilized
// Put the newString array into a single string.
// Return the newString array.

function titleCase(string) {
  var shortWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'api') {
      newString[i] = newString[i].toUpperCase();
    }
    if (newString[i].toLowerCase().includes('javascript')) {
      if (newString[i].includes(':')) {
        newString[i] = 'JavaScript:';
      } else {
        newString[i] = 'JavaScript';
      }
    }
    if (newString[i] === newString[0] || !shortWords.includes(newString[i])) {
      var first = newString[i][0].toUpperCase();
      var rest = newString[i].substring(1);
      newString[i] = first + rest;
    }
    if (newString[i].includes(':')) {
      var afterColon = newString[i + 1][0].toUpperCase();
      var restColon = newString[i + 1].substring(1);
      newString[i + 1] = afterColon + restColon;
    }
    if (newString[i].includes('-')) {
      var dashString = newString[i].split('-');
      var afterDash = dashString[1][0].toUpperCase();
      var restDash = dashString[1].substring(1);
      dashString[1] = afterDash + restDash;
      dashString = dashString.join('-');
      newString[i] = dashString;
    }
  }
  newString = newString.join(' ');
  return newString;
}
