const express = require('express');
const app = express();
const fs = require('fs');
const dataObject = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in dataObject) {
    notesArray.push(dataObject[key]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (dataObject.notes[id] === undefined) {
    res.status(404).send({ error: `Cannot find note with id ${id}` });
  } else {
    res.status(200).json(dataObject.notes[id]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if (newEntry.content === undefined) {
    res.status(400).send({ error: 'Content is a required field' });
  }
  const newObject = {};
  newObject.id = dataObject.nextId;
  for (const key in newEntry) {
    newObject[key] = newEntry[key];
  }
  dataObject.notes[dataObject.nextId] = newObject;
  dataObject.nextId++;
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'An unexpected error occured' });
    } else {
      res.status(201).send(newObject);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (dataObject.notes[id] === undefined) {
    res.status(404).send({ error: `Cannot find note with id ${id}` });
  }
  delete dataObject.notes[id];
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'An unexpected error occured' });
    } else {
      res.status(204).send('');
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
