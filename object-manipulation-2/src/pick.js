/* exported pick */

// We need a storage for the new object.
// We need to check if the keys[i] is equal to any of the properties in source.
// If it is, return the property with the value.
// If not, return an empty array.

function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    var property = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        newObject.keys[i] = property;
      } else {
        return newObject;
      }
    }
  }
}

pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']); // -> { foo: 1, baz: 3 }
pick({ qux: 4, corge: 5 }, ['bar', 'grault']); // -> {}
pick({ bar: 2 }, ['foo', 'bar', 'baz']); // -> { bar: 2 }
