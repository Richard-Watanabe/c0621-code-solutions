function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(2);

console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Cody');

console.log('greetResult: ', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(3, 5);

console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Cody', lastName: 'Miller' });

console.log('getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResult: ', getLastElementResult);
