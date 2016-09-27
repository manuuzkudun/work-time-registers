'use strict';
 
const _ = require('underscore')
  , express = require('express')
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
//dataInit.removeEmployeeData();
//const employees = dataInit.employees;
// TO-DO: import it as a function with a path parameter 
//const registers = require('./config/registers_to_json');
//dataInit.loadInitDataToDb(employees,registers);


// Load routes
app.use('/auth', require('./routes/auth_api'));
app.use('/api', require('./routes/employee_api'));
var server = app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});


reload(server, app);