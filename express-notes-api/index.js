const express = require('express');
const app = express();
const dataObject = require('./data.json');
const fs = require('fs');

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
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(dataObject.notes[id]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if (newEntry.content === undefined) {
    return res.status(400).send({ error: 'Content is a required field' });
  }
  newEntry.id = dataObject.nextId;
  dataObject.notes[dataObject.nextId] = newEntry;
  dataObject.nextId++;
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'An unexpected error occured' });
    } else {
      res.status(201).send(newEntry);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 1) {
    return res.status(400).send({ error: 'id must be a positive integer' });
  } else if (dataObject.notes[id] === undefined) {
    return res.status(404).send({ error: `Cannot find note with id ${id}` });
  } else {
    delete dataObject.notes[id];
  }
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'An unexpected error occured' });
    } else {
      res.status(204).send('');
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const newEntry = req.body;
  if (id < 1) {
    return res.status(400).send({ error: 'id must be a positive integer' });
  } else if (newEntry.content === undefined) {
    return res.status(400).send({ error: 'content is a required field' });
  } else if (dataObject.notes[id] === undefined) {
    return res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    dataObject.notes[id].content = newEntry.content;
  }
  fs.writeFile('data.json', JSON.stringify(dataObject, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).send({ error: 'An unexpected error occured' });
    } else {
      res.status(200).send(dataObject.notes[id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
