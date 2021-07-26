/* exported unique */

// Check every value in the array.
// If the value isn't pushed into the newArray already, push it to the newArray.
// If a value has already been pushed, don't push it into the newArray.
// Return the newArray.

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
