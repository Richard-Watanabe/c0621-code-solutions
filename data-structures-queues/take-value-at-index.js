/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let first = queue.dequeue();
  while (index > 0) {
    first = queue.dequeue(queue.enqueue(first));
    index--;
  }
  return first;
}
