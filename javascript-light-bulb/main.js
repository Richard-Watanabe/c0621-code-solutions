var $lightBulb = document.querySelector('.light-bulb');
var $body = document.querySelector('body');

function toggle(event) {
  if ($lightBulb.className === 'light-bulb light-bulb-on') {
    $lightBulb.className = 'light-bulb light-bulb-off';
    $body.className = 'dark';
  } else {
    $lightBulb.className = 'light-bulb light-bulb-on';
    $body.className = 'light';
  }
}

$lightBulb.addEventListener('click', toggle);
