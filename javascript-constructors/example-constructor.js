function ExampleConstructor() {

}

console.log('value of prototype property of Example Constructor:', ExampleConstructor.prototype);
console.log('type of prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();

console.log('value of newExample: ', newExample);

var isItInstanceOfExampleConstructor = newExample instanceof ExampleConstructor;

console.log('Is newExample an instance of ExampleConstructor: ', isItInstanceOfExampleConstructor);
