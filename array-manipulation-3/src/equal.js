/* exported equal */

// If the length of first array is different from second array, return false.
// Check each of the content of the array.
// Unless the values are exactly the same, return false.
// If they are exactly the same, return true.

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'qux']);
