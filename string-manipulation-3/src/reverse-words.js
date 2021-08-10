/* exported reverseWords */

// We need to split the string on each space.
// We need to reverse each word in the split words array.
// We need to put the words back with spaces at the end of each word, and store it.
// Return the storage.

function reverseWords(string) {
  var words = string.split(' ');
  var reversed = '';
  for (var i = 0; i < words.length; i++) {
    for (var j = words[i].length - 1; j >= 0; j--) {
      reversed += words[i][j];
    }
    if (i !== words.length - 1) {
      reversed += ' ';
    }
  }
  return reversed;
}

// ['All', 'Code', 'All', 'Day']
// 'llAedoCllAyaD'
// 'llA edoC llA yaD'
