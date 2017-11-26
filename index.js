const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var app = express();


var messageRoutes = require('./routes/message');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/message', messageRoutes);

app.get('/', (req, res) => {
  res.send('Root route');
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
