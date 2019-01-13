const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3000;
const user = require('./routes/route');

// Connect to TetrisDB
mongoose.connect('mongodb://localhost/TetrisDB', { useNewUrlParser: true, autoIndex: false });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', user);

app.listen(PORT, function(){
    console.log('Server is running on Port', PORT);
 });