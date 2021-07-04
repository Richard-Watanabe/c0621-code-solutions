/* exported capitalizeWords */

// We need a storage for the new string.
// We need to split the string by words and put it into an array.
// We need to lowercase all letters that are not the first letter, and restore it in a new array.
// We need to capitalize the first letter of each data in the new array, and restore it in a new final array.
// We need to put the array back into a string.
// We need to return the array.

function capitalizeWords(string) {
  var lowerAll = [];
  var final = [];
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    lowerAll.push(array[i].toLowerCase());
    final.push(lowerAll[i][0].toUpperCase() + lowerAll[i].slice(1));
  }
  return final.join(' ');
}

capitalizeWords('aLl CoDe aLl DaY');
