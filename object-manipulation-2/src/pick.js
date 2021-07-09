/* exported pick */

// We need a storage for the new object.
// We need to check if the any of the data in the keys array are equal to any of the properties in source, and also make sure the property is not undefined.
// If they pass, return the property with the value.

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      var property = source[key];
      if (key === keys[i] && property !== undefined) {
        newObject[keys[i]] = property;
      }
    }
  }
  return newObject;
}

pick({ foo: null, bar: 0, baz: undefined }, ['foo', 'bar', 'baz']);
