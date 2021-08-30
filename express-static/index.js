const express = require('express');
const app = express();
const path = require('path');

const joined = path.join(__dirname, 'public');

const staticDocs = express.static(joined);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use(staticDocs);
