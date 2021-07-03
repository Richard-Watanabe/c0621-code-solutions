/* exported getValue */

// We need a container for the value.
// We need to store the key of the property.
// We need to return what is in the storage.
function getValue(object, key) {
  var value = '';
  value = object[key];
  return value;
}

const dave = { firstName: 'David', lastName: 'Thomas' };
getValue(dave, 'firstName'); // -> "David"
getValue(dave, 'lastName'); // -> "Thomas"
