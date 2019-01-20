const mongoose = require('mongoose');
const user = require('./models/modelUser');
const scoring = require('./models/modelScoring');
const DATABASE_CONNECTION = 'mongodb://localhost/TetrisDB';


var db = mongoose.connect(DATABASE_CONNECTION, { useNewUrlParser: true, autoIndex: false })
  .then(() => console.log("Connected to TetrisDB"))
  .catch(err => console.log(err))

module.exports = db;
module.exports = {
  DB: 'mongodb://mongo:27017/tetris'
}