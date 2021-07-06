/* exported take */

// We need to have a storage for the new array.
// We need to check each data in the array while the index is less than the count.
// If the index is less than the count, store the data at that index to the new array.
// If there are no data in the array, return the array empty.
// Otherwise, return the stored array.

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
    if (array[i] === undefined) {
      return array;
    }
  }
  return newArray;
}

take(['foo', 'bar', 'baz', 'qux'], 2);
take([], 7);
