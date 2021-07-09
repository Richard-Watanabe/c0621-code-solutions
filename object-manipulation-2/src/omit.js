/* exported omit */

// We need a storage for the new object.
// We need to check if each property in source is equal to the data in the array.
// If they are, return nothing.
// If they are not, store in the pair in the storage.
// Return the storage.

function omit(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var property in source) {
      if (keys[i] !== property) {
        var value = source[property];
        newObject[property] = value;
        return newObject;
      }
    }
  }
}

omit({ qux: 4, corge: 5 }, ['bar', 'grault']); // -> { qux: 4, corge: 5 }
omit({}, ['foo', 'bar', 'baz']); // -> {}
