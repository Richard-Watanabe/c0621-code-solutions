var $contactForm = document.querySelector('form');
var messageData = {};

function preventDefault(event) {
  event.preventDefault();
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log(messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', preventDefault);
