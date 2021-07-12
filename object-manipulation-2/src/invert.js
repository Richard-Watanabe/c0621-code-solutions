/* exported invert */

// We need a storage for the new object.
// We need to check each property in the source object.
// Assign the property of the new object to the value of each source, and assign the value of the new object to the property of source.
// Return the new object.

function invert(source) {
  var newObject = {};
  for (var property in source) {
    var value = source[property];
    newObject[value] = property;
  }
  return newObject;
}
