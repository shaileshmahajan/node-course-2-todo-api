// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 //find has toArray method which retursn promise , thats whyb we can tag along .then
 //below return all documents
  db.collection('Todos').find().toArray().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err) =>{
    console.log('Unable to fetch docs',err);
  });

  // below returns documents todos with field of completed = false
  db.collection('Todos').find({completed: false}).toArray().then(
    (docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err) =>{
    console.log('Unable to fetch docs',err);
  });


  db.collection('Todos').find().count().then(
    (count) => {
      console.log("Todos Count: " + count);
    },(err)=> {
      console.log('Unable to fetch docs',err);
    }
  );

  db.collection('Users').find({name:'shailesh'}).toArray().then(
    (docs) =>{
      console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
      console.log('Unable to fetch docs',err);
    }
  );


  // db.collection('Todos').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  // db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });

  // db.close();
});
