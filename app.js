'use strict';
 
const express = require('express');
const bodyParser = require('body-parser');
const reload = require('reload');

const app = express();

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
app.use('/auth', require('./routes/auth_api'));
app.use('/api', require('./routes/employee_api'));
var server = app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});


reload(server, app);