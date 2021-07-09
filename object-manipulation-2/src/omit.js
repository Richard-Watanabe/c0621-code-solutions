/* exported omit */

// We need a storage for the new object.
// We need to check if each property in source is equal to the data in the array.
// If they are, return nothing.
// If they are not, store in the pair in the storage.
// Return the storage.

function omit(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      var property = source[key];
      if (key === keys[i]) {
        return;
      } else {
        newObject[key] = property;
      }
    }
  }
  return newObject;
}

omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']); // -> { bar: 2 }
omit({ qux: 4, corge: 5 }, ['bar', 'grault']); // -> { qux: 4, corge: 5 }
omit({}, ['foo', 'bar', 'baz']); // -> {}
