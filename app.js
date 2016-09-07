'use strict';

const express = require('express')
  , reload = require('reload')
  , mysql = require('mysql')
  , app = express();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'alpha1',
  database : 'gestion_horas'
});

connection.connect();

connection.query('SELECT * FROM users', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].email);
});

connection.end();

// Configure express app
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('./public'));


// Load routes
app.use(require('./routes/index'));
app.use(require('./routes/employees'));
app.use(require('./routes/api'));


var server = app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});


reload(server, app);