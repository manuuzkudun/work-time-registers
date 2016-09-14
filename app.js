'use strict';

const express = require('express')
  , reload = require('reload')
  , bodyParser = require('body-parser')
  , dataInit = require('./config/dataInit')
  , app = express();

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

// db data init
//const employees = dataInit.employeeData;
//dataInit.loadEmployeeData(employees);


// Load routes
app.use('/api', require('./routes/api'));
var server = app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});


reload(server, app);