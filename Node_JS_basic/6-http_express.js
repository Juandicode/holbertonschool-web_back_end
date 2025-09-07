const express = require('express');

const app = express();

// endpoint raíz
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// puerto
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// exportar app
module.exports = app;
