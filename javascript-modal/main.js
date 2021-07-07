var $blueButton = document.querySelector('.blue-button');
var $modal = document.querySelector('.modal-container');
var $noButton = document.querySelector('.button-no');

function open(event) {
  $modal.className = 'modal-on';
  $blueButton.className = 'blue-button over';
}

function close(event) {
  $modal.className = 'modal-container';
  $blueButton.className = 'blue-button';
}

$blueButton.addEventListener('click', open);
$noButton.addEventListener('click', close);
