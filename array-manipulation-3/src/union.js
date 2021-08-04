/* exported union */

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (second[j] !== first[j]) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
