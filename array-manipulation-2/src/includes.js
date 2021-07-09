/* exported includes */

// We need to check each data in the array.
// If any data is equal to the value, return true.
// If not, return false.

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
includes(['foo', 'bar', 'baz', 'qux'], 'baz');
// -> true
