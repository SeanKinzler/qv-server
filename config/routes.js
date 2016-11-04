const express = require('express');
const app = express();
app.use(bodyParser());

app.get('*', (req, res) => {res.send('hello world')});


module.exports = app;