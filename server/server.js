  var express = require('express');
  var bodyParser = require('body-parser');
  const {ObjectID} = require('mongodb');


//server is responsible for routes
  var {mongoose} = require('./db/mongoose');
  var {Todo} = require('./models/todo');
  var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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
  });
});

// GET /todos/id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //validate id use isValid
  //if not valid stop function with 404 - send back empty body send()
if(!ObjectID.isValid(id)){
  return res.send(404).send();
}
  //query database findByID
  Todo.findById(id).then((todo) => {
  if(!todo){
     res.send(404).send();
  }
  res.send({todo});
  }).catch((e) => {
  res.status(400).send();
});
});

app.listen(port, () => {
  console.log('Started on port ' + port);
})

module.exports = {app};
