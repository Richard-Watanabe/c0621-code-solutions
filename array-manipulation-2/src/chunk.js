/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  var finalArray = [];
  for (var i = 0; i < size; i++) {
    newArray.push(array[i]);
    for (var j = 0; j < array.length; j++) {
      finalArray.push(newArray[j]);
    }
  }
  return finalArray;
}

chunk(['foo', 'bar', 'baz', 'qux'], 2);
// -> [["foo", "bar"], ["baz", "qux"]]

chunk([1, 2, 3, 4, 5], 1);
// -> [[1], [2], [3], [4], [5]]
