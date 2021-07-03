/* exported getKeys */

// We need a storage for the keys array.
// We need to find the properties of the objects.
// We need to store the found properties.
// We need to return the stored properties.

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
