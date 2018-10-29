const {ObjectID} = require('mongodb');

const (mongoose) = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user')

// var id = '5bd77e641a7ed16d9dfdd47c11';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not Valid');
// }

// Todo.find({
//   _id: id,
// }).then((todo) =>{
//   console.log('Todos: ', todo);
// });
//
// Todo.findOne({//more useful method
//   _id: id,
// }).then((todo) =>{
// console.log('Todos: ', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));//best for finding by id

//challenge time

//query users collection with id.

var userID = '5bd4b7a0fb9fc092870b409b';

if(ObjectID.isValid(userID)){
  console.log('ID is not valid');
}

user.findByID(id).then((id) => {
  if(!user){
    return console.log(JSON.stringify(user, undefined, 2));
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
