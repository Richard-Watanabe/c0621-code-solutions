/* exported intersection */

// Prepare a storage for the new array.
// Check if each value in the first array is equal to each of the value in the second array
// If the two compared values are equal, push it to the new array.
// Return the new array.

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
