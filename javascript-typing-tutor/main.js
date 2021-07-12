var $letter = document.querySelectorAll('span');
var $body = document.querySelector('body');
var letterIndex = 0;

function check(event) {
  if (event.key === $letter[letterIndex].textContent) {
    $letter[letterIndex].className = 'green';
    $letter[letterIndex + 1].className = 'border-bottom';
    letterIndex++;
  } else {
    $letter[letterIndex].className = 'red border-bottom';
  }
}

$body.addEventListener('keydown', check);
