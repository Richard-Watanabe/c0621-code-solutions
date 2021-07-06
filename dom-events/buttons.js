
// We need to log the message 'button clicked' to the console
// We need to log the event object to the console
// We need to log the target property of the event object to the console

function handleClick(event) {
  console.log('What happened: ', 'button clicked');
  console.log('Event: ', event);
  console.log('Target property of the event object: ', event.target);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);

// We need to log the message 'button hovered' to the console
// We need to log the event object to the console
// We need to log the target property of the event object to the console

function handleMouseover(event) {
  console.log('What happened: ', 'button hovered');
  console.log('Event: ', event);
  console.log('Target property of the event object', event.target);
}

var $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseover);

// We need to log the message 'button double-clicked' to the console
// We need to log the event object to the console
// We need to log the target property of the event object to the console

function handleDoubleClick(event) {
  console.log('What happened: ', 'button double-clicked');
  console.log('Event: ', event);
  console.log('Target property of the event object', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');

$doubleClick.addEventListener('dblclick', handleDoubleClick);
