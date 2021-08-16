const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const currentId = nextId;
  const newEntry = req.body;
  newEntry.Id = currentId;
  grades[currentId] = newEntry;
  nextId++;
  res.status(201).send(grades[currentId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
