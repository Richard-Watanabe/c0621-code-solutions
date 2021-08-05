/* exported flatten */

// Check if any values in the array is nested in another array.
// If so, push each values nested in that array to the new array.
// Also push the values that are not nested in a layer of array.
// return the storage.

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

flatten([['foo', 'bar'], ['baz', 'qux']]);
flatten([[1], [2], 3, 4, [5]]);
flatten([false, [true, [false]], [true]]);
