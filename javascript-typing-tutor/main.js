var $letter = document.querySelectorAll('span');

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
  $letter[i].addEventListener('keydown', check);
}
