var $h1 = document.querySelector('h1');

function changeText(event) {
  $h1.textContent = 'Hello There';
}

setTimeout(changeText, 2000);
