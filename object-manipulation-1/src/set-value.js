/* exported setValue */

// We need to structure an object.s

function setValue(object, key, value) {
  object[key] = value;
}

var dave = { firstName: 'David' };
setValue(dave, 'lastName', 'Thomas');
