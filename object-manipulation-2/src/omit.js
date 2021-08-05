/* exported omit */

// We need a storage for the new object.
// Store each property value pair of source.
// Delete properties that are included in the keys array.
// Return the storage.

function omit(source, keys) {
  var newObject = {};
  for (var property in source) {
    var value = source[property];
    newObject[property] = value;
  }
  for (var i = 0; i < keys.length; i++) {
    delete newObject[keys[i]];
  }
  return newObject;
}

omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']); // -> { bar: 2 }
omit({ qux: 4, corge: 5 }, ['bar', 'grault']); // -> { qux: 4, corge: 5 }
omit({}, ['foo', 'bar', 'baz']); // -> {}
