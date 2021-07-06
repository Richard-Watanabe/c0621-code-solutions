/* exported chunk */

// We need a storage for the new array.
// We need to check each element in the array at chunks of the size parameter.
// We need to get data amount of size, which will be new array data, and store that into the new array.
// We need to return the content of the storage.

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}

chunk(['foo', 'bar', 'baz', 'qux'], 2);
// -> [["foo", "bar"], ["baz", "qux"]]

chunk([1, 2, 3, 4, 5], 1);
// -> [[1], [2], [3], [4], [5]]
