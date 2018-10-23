// const  MongoClient = require('mongodb/').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb/');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //(url where database lives, callback function)
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5bce7e6244197d593b3e0c50')
    // }).toArray().then((docs) => {//query in find method
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   return console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count) => {//query in find method
    //   console.log('Todos');
    //   console.log('Todos count: ' + count);
    //
    // }, (err) => {
    //   return console.log('Unable to fetch todos', err);
    // })

     db.collection('Users').find({
       name: 'Brady'
     }).toArray().then((docs) => {//query in find method
       console.log('Todos');
       console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
       return console.log('Unable to fetch todos', err);
     })


    //db.close();
} );
