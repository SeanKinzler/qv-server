const express = require('express');
const bodyParser = require('body-parser').json;
const app = express();
app.use(bodyParser());

app.get('/', (req, res) => {
  console.log('yep');
  res.send('Yo World');
});


module.exports = app;