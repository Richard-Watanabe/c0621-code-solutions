const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(`./node-fs-readfile/${fileName}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
