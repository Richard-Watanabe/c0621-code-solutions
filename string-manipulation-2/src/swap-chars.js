/* exported swapChars */

// We need to split the string into arrays and store the array into a variable.
// We need to switch 1 letter from the index starting at firstIndex, and replace it with the letter from index secondIndex.
// We need to switch 1 letter from the index starting at secondIndex, and replace it with the letter from index firstIndex.
// We need to change the array back into a string and return it.

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  array.splice(firstIndex, 1, string[secondIndex]);
  array.splice(secondIndex, 1, string[firstIndex]);
  return array.join('');
}

swapChars(11, 23, 'HTML, CSS, JavaScript, React');
