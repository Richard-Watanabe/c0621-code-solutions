/* exported toObject */

// We need a storage for the new object.
// We need to assign the first data in the array to the property of the object.
// We need to assign the second data in the array to the value of the object.
// Return object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
