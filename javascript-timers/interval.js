var $h1 = document.querySelector('h1');
var handle = setInterval(countDown, 1000);

function countDown() {
  var count = parseInt($h1.textContent);
  if (count === 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(handle);
  } else {
    count--;
    $h1.textContent = count;
  }
}
