var $letter = document.querySelectorAll('span');
var $body = document.querySelector('body');
var wordIndex = 0;

function check(event) {
  while (wordIndex < $letter.length) {
    if (event.key === $letter[wordIndex].textContent) {
      $letter[wordIndex].className = 'green';
    } else {
      $letter[wordIndex].className = 'red';
    }
    wordIndex++;
  }
}

for (var i = 0; i < $letter.length; i++) {
  $body.addEventListener('keydown', check);
}

// for (var i = 0; i < $letter.length; i++) {
//   if (event.key === $letter[i].textContent) {
//     $letter[i].className = 'green space';
//   } else {
//     $letter[i].className = 'red space';
//   }
// }
