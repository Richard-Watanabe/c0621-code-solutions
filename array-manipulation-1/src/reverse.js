/* exported reverse */

// We need a storage for the new array
// We need to check each data in the array in reverse order.
// We store each data into the new array.
// We return the new array.

function reverse(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
