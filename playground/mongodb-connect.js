// const  MongoClient = require('mongodb/').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb/');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //(url where database lives, callback function)
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');



    //  db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    //  }, (err, result) => {
    //    if(err){
    //      return console.log('Unable to insert Todo', err);
    //    }
    //    console.log(JSON.stringify(result.ops), undefined, 2);
    // });//Only takes name of collection

     // db.collection('Users').insertOne({
     //   name: 'Brady',
     //   age: 18,
     //   location: 'Noblesville Indiana'
     // }, (err, result) => {
     //   if(err){
     //     return console.log('Unable to insert user');
     //   }
     //   console.log(result.ops[0]._id.getTimeStamp());
     // });
    db.close();
} );
