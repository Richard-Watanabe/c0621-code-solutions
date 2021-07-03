/* exported compact */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && array[i] !== null) {
      newArray.push(array[i]);
    } else if (isNaN(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
