var three = 3;
var twenty = 20;
var hundred = 100;

var maximumValue = Math.max(three, twenty, hundred);

console.log('value of maximumValue: ', maximumValue);

var heroes = ['Ironman', 'Spiderman', 'Hulk', 'Batman'];

var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero: ', randomHero);

var library = [
  {
    title: 'Code with Cody',
    author: 'Cody Miller'
  },
  {
    title: 'Swim with Tim',
    author: 'Tim Davis'
  },
  {
    title: 'Tea with TJ',
    author: 'TJ Kinion'
  }
];

var lastBook = library.pop();

console.log('Book popped from library: ', lastBook);

var firstBook = library.shift();

console.log('Book shifted from library: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library: ', library);

var fullName = 'Richard Watanabe';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName: ', sayMyName);
