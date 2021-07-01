/* exported getStudentNames */

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

var students = [
  {
    name: 'Shrek'
  },
  {
    name: 'Donkey'
  },
  {
    name: 'Fiona'
  }
];

getStudentNames(students);
