/* exported dropRight */

// We need a storage for th new array.
// We need to check each element in the array while the index if greater than (the number of data in the array - paramater count)
// We need to store the checked elements into the new array.
// We need to return the new array.

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

dropRight(['foo', 'bar', 'baz', 'qux'], 2);
// -> ["foo", "bar"]
dropRight([1, 2, 3, 4, 5], 1);
// -> [1, 2, 3, 4]
dropRight([false, true, false, true], 3);
// -> [false]
