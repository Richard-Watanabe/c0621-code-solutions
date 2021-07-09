/* exported tail */

// We need a storage for the new array.
// Store the data into the new array except the first data.
// Return the new array.

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

tail(['foo', 'bar', 'baz']);
tail([1, 2, 3, 4, 5, 6]);
tail([true, false, false, true]);
tail([]);
