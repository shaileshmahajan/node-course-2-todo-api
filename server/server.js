var express = require('express');
var bodyParser = require('body-parser'); //converts body to JSON in middleware (before request goes to handler like get/post)
                                         //attaches json to req object

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); // express middleware, before request goes to handler like get/post)

//routes
app.post('/todos', (req, res) => {
  console.log (req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
