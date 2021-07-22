var imagesArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

var $arrowRight = document.querySelector('.arrow-right');
var $arrowLeft = document.querySelector('.arrow-left');
var $image = document.querySelector('img');
var $dot = document.querySelectorAll('.dot');
var $allDots = document.querySelector('.allDots');

$arrowRight.addEventListener('click', goRight);
$arrowLeft.addEventListener('click', goLeft);
$allDots.addEventListener('click', clickSwitch);

var currentImage = 0;

function goRight(event) {
  currentImage++;
  if (currentImage === imagesArray.length) {
    currentImage = 0;
  } else {
    $image.setAttribute('src', imagesArray[currentImage]);
  }
  for (var i = 0; i < $dot.length; i++) {
    if (i === currentImage) {
      $image.setAttribute('src', imagesArray[currentImage]);
      $dot[i].className = 'fas fa-circle dot';
    } else {
      $dot[i].className = 'far fa-circle dot';
    }
  }
}

function goLeft(event) {
  if (currentImage === 0) {
    currentImage = imagesArray.length;
  } else {
    currentImage--;
    $image.setAttribute('src', imagesArray[currentImage]);
  }
  for (var i = 0; i < $dot.length; i++) {
    if (i === currentImage) {
      $image.setAttribute('src', imagesArray[currentImage]);
      $dot[i].className = 'fas fa-circle dot';
    } else {
      $dot[i].className = 'far fa-circle dot';
    }
  }
}

setInterval(autoSwitchImage, 3000);

function autoSwitchImage() {
  currentImage++;
  if (currentImage >= imagesArray.length) {
    currentImage = 0;
  }
  for (var i = 0; i < $dot.length; i++) {
    if (i === currentImage) {
      $image.setAttribute('src', imagesArray[currentImage]);
      $dot[i].className = 'fas fa-circle dot';
    } else {
      $dot[i].className = 'far fa-circle dot';
    }
  }
}

function clickSwitch(event) {
  if (event.target.matches('.dot')) {
    currentImage = event.target.getAttribute(['data-id']);
    $image.setAttribute('src', imagesArray[currentImage]);
    event.target.className = 'fas fa-circle dot';
  }
  for (var i = 0; i < $dot.length; i++) {
    $image.setAttribute('src', imagesArray[currentImage]);
    $dot[currentImage].className = 'fas fa-circle dot';
    $dot[i].className = 'far fa-circle dot';
  }
}
