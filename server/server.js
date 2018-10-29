  var express = require('express');
  var bodyParser = require('body-parser');

//server is responsible for routes
  var {mongoose} = require('./db/mongoose');
  var {Todo} = require('./models/todo');
  var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); //sends json to express app

//Send JSON to server w/ text and create new model to client
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}); //using object instead of array makes for more flexible coding options
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};
