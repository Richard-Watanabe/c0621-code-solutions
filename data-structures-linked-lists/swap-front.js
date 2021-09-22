/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const newFirst = list.next;
    list.next = list.next.next;
    newFirst.next = list;
    return newFirst;
  }
  return list;
}
