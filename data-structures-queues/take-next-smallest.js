/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  let next = queue.peek();
  while (next < first) {
    queue.enqueue(first);
    first = queue.dequeue();
    next = queue.peek();
  }
  return first;
}
