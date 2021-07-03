/* exported reverseWord */

// Have a storage for the new reversed Word.
// Store the character of the word into the storage starting from the last character and working to the beginning.
// Return the stored word.

function reverseWord(word) {
  var reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

reverseWord('ydoC');
