/* exported union */

// Have a storage for the new array.
// Check if the new array already has the values in the first array.
// If not, add those values to the new array.
// Check if the new array already has the values in the second array.
// If not, add those values to the new array.
// Return the storage.

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!newArray.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
