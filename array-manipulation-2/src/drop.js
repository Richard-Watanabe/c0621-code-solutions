/* exported drop */

// We need to prepare a storage for the new array.
// We need to check each element in the array starting from the in dex at count.
// We need to store the checked elements in the new array.
// We need to return the new array.

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

drop(['foo', 'bar', 'baz', 'qux'], 2);
// -> ["baz", "qux"]
