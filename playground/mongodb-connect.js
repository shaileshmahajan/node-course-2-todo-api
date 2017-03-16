//MongoClient = require('mongodb').MongoClient;

//OR

//this code is similar to above code as it uses object destructing to get the property MongoClient from mongodb object.
const {MongoClient} = require('mongodb');


//object destructuring is ES6 way of creating variables from objects properties (or fields)
//we can grab name and automatically crearte name variable from below
var user = {name:'shailesh', age:25};
var {name} = user;
var {age} = user;
console.log (name);
console.log (age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{     //TodoApp is database
  if(err){
    console.log('Unable to connect to the Mongo Database');
    //or use return
  }
  else{
    console.log('Connected to MongoDB server');
  }


  db.collection('Todos').insertOne({   //automatically adds collection (table) then adds document (row)
    text: 'something to do',
    completed: false
  }, (err, result) => {
      if(err){
        return console.log('Unable to insert Todo', err); // this will return after console.log
      }

      console.log(JSON.stringify(result.ops,undefined,2));

  });


  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });

  db.close();

});
