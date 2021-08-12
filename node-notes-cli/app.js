const fs = require('fs');

fs.readFile('./node-notes-cli/data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const objectData = JSON.parse(data);
  if (process.argv[2] === 'read') {
    for (var key in objectData.notes) {
      console.log(`${key}: ${objectData.notes[key]}`);
    }
  }
  if (process.argv[2] === 'create') {
    const note = process.argv[3];
    objectData.notes[objectData.nextId] = note;
    objectData.nextId++;
  }
  if (process.argv[2] === 'delete') {
    delete objectData.notes[process.argv[3]];
  }
  if (process.argv[2] === 'update') {
    const updatedNote = process.argv[4];
    objectData.notes[process.argv[3]] = updatedNote;
  }
  const formattedData = JSON.stringify(objectData, null, 2);
  fs.writeFile('./node-notes-cli/data.json', formattedData, err => {
    if (err) throw err;
  });
});
