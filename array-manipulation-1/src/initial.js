/* exported initial */

// We need a storage for the new array.
// For every data in the array except the last one, push it into the new array.
// Return the new array.

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

initial([true, false, false, true]);
