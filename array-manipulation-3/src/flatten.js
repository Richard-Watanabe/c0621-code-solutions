/* exported flatten */
function flatten(arr) {
  const flat = [];
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (!Array.isArray(cur)) {
      flat.push(cur);
    } else {
      for (let j = 0; j < cur.length; j++) {
        flat.push(cur[j]);
      }
    }
  }
  return flat;
}
