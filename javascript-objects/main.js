var student = {
  firstName: 'Richard',
  lastName: 'Watanabe',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Insurance Agent';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2017'
};

vehicle['color'] = 'Cosmic Blue';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Keigo',
  type: 'Shiba Inu'
};

delete pet.name;
delete pet['type'];

console.log('value of pet: ', pet);
