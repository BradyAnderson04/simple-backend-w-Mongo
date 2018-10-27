// const  MongoClient = require('mongodb/').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb/');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //(url where database lives, callback function)
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    //findOneAndUpdate
      // db.collection('Todos').findOneAndUpdate({
      //   _id: new ObjectID('5bce946c18c3a288120aa36a')
      // },{
      //   $set: {
      //     complete: true
      //   }
      // }, {
      //   returnOriginal: false
      // }).then((result) => {
      //   console.log(result);
      // });

      db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bce7d03c4c7573b15adbaf4')
      },{
        $set: {
          name: 'Brady'
        },
        $inc: {age: 1}
      },{
        returnOriginal: false
    }).then((result) =>{
      console.log(result);
    });
    //db.close();
} );
