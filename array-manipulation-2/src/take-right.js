/* exported takeRight */

// We need to prepare a storage for the new array.
// We need to check each data in the array starting from (number of index in the array - parameter count)
// If the array has a value that is undefined, return the array as is.
// Otherwise, store the checked element into the new array.
// Return the new array.

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array[i] === undefined) {
      return array;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

takeRight(['foo', 'bar', 'baz', 'qux'], 2);
// -> ["baz", "qux"]

takeRight([1, 2, 3, 4, 5], 1);
// -> [5]

takeRight([false, true, false, true], 3);
// -> [true, false, true]
