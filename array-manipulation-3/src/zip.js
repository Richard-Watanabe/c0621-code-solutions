/* exported zip */

// Have a storage for the new array.
// Check which of the parameter arrays are shorter.
// For each value in each array, put them into a pair array.
// Put the paired array into a parent array.
// Return the parent array.

function zip(first, second) {
  var newArray = [];
  var shortArray = second.length;
  if (first.length < second.length) {
    shortArray = first.length;
  }
  for (var i = 0; i < shortArray; i++) {
    var pair = [];
    pair.push(first[i]);
    pair.push(second[i]);
    newArray.push(pair);
  }
  return newArray;
}
