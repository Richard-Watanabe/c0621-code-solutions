/* exported compact */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Number.isNaN(array[i]) !== true && array[i] !== false && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && array[i] !== null) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
