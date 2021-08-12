const fs = require('fs');

const data = process.argv[2];

fs.writeFile('./node-fs-writefile/note.txt', data, err => {
  if (err) throw err;
});
