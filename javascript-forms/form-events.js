function handleFocus(event) {
  console.log('Focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var $inputs = document.querySelectorAll('input');
var $textArea = document.querySelector('textarea');

for (var i = 0; i < $inputs.length; i++) {
  $inputs[i].addEventListener('focus', handleFocus);
  $inputs[i].addEventListener('blur', handleBlur);
  $inputs[i].addEventListener('input', handleInput);
}

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
