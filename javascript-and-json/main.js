var books = [
  {
    isbn: '1111111',
    title: 'Cody Codes',
    author: 'Cody Miller'
  },
  {
    isbn: '2222222',
    title: 'Swim with Tim',
    author: 'Tim Davis'
  },
  {
    isbn: '3333333',
    title: 'Code with Kenn',
    author: 'Kenn De La Cruz'
  }
];

console.log('Type of books: ', typeof books);

var newBooks = JSON.stringify(books);

console.log('Type of books after JSON.stringify: ', typeof newBooks);

var student = '{ "number id": "4444444", "name": "Richard" }';

console.log('Type of student: ', typeof student);

var newStudent = JSON.parse(student);

console.log('Type of student after JSON.parse: ', typeof newStudent);
