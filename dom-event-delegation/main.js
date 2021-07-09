var $taskList = document.querySelector('.task-list');

function log(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $listItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', $listItem);
    $listItem.remove();
  }
}

$taskList.addEventListener('click', log);
