var $letter = document.querySelectorAll('span');
var $body = document.querySelector('body');
var letterIndex = 0;

function check(event) {
  if (event.key === $letter[letterIndex].textContent) {
    $letter[letterIndex].className = 'green';
    letterIndex++;
  } else {
    $letter[letterIndex].className = 'red border-bottom';
    letterIndex++;
  }
  $letter[letterIndex].className = 'border-bottom';
}

for (var i = 0; i < $letter.length; i++) {
  $body.addEventListener('keydown', check);
}
