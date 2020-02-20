const express = require('express');
const app = express();
const port = 8888;

app.listen(port, () => console.log('Listening on port: ' + port));
app.get('/', (req, res) => {
  res.send("Hello World!");
} );