'use strict';

const express = require('express')
  , reload = require('reload')
  , bodyParser = require('body-parser')
  , mongo = require('mongodb').MongoClient
  , app = express();

var database;

// Configure express app
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.set('view engine', 'ejs');
app.set('views', 'views');

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
  next();
});

// Load routes
app.use(require('./routes/index'));
app.use(require('./routes/employees'));
app.use(require('./routes/api'));

// Connect to mongodb and set the database connection
mongo.connect("mongodb://localhost:27017/test", (err,db) =>{
  if(!err){
    console.log("We are connected to mongoDb");
    database = db;
  }
});

var server = app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});


reload(server, app);