/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  } else {
    while (list.next !== null) {
      list = list.next;
      if (list.data === value) {
        return true;
      }
    }
    return false;
  }
}
