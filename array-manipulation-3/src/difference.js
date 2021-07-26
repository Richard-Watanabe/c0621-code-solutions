/* exported difference */

// Have a storage for the newArray.
// For each value in the first array, check if it is included in the second array.
// If not, push it to the newArray.
// For each  value in the second array, check if it is included in the first array.
// If not, push it to the newArray.
// Return the newArray.

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
