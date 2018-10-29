
//database config

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //this is a built in promise only have to use at main file
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
