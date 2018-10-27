// const  MongoClient = require('mongodb/').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb/');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //(url where database lives, callback function)
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    //deleteMany
      // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
      //   console.log(result);
      // })
      db.collection('Users').deleteMany({name: 'Brady'}).then((result) => {
        console.log(result);
      })

    //deleteOne
      // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
      //   console.log(result);
      // })
      db.collection('Users').deleteOne({_id: new ObjectID('5bce7d303c75d4223b253e91')}).then((result) => {
        console.log(result);
      })

    //findOneAndDelete -> this one seems really useful
      // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      //   console.log(result);
      // })

    //db.close();
} );
