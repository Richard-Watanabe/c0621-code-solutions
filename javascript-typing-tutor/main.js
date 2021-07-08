var $letter = document.querySelectorAll('span');
var $body = document.querySelector('body');

function check(event) {
  for (var i = 0; i < $letter.length; i++) {
    if (event.key === $letter[i].textContent) {
      $letter[i].className = 'green border-bottom';
    } else {
      $letter[i].className = 'red border-bottom';
    }
  }
}

for (var i = 0; i < $letter.length; i++) {
  $body.addEventListener('keydown', check);
}
