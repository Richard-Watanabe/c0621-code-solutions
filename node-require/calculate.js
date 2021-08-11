const addFunction = require('./add');
const subtractFunction = require('./subtract');
const multiplyFunction = require('./multiply');
const divideFunction = require('./divide');

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  const sum = addFunction(num1, num2);
  console.log('result: ', sum);
} else if (process.argv[3] === 'minus') {
  const difference = subtractFunction(num1, num2);
  console.log('result: ', difference);
} else if (process.argv[3] === 'times') {
  const product = multiplyFunction(num1, num2);
  console.log('result: ', product);
} else if (process.argv[3] === 'over') {
  const quotient = divideFunction(num1, num2);
  console.log('result: ', quotient);
}
