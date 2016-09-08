'use strict';

const express = require('express')
  , reload = require('reload')
  , bodyParser = require('body-parser')
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

// Load routes
app.use(require('./routes/index'));
app.use(require('./routes/employees'));
app.use(require('./routes/api'));




var server = app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});


reload(server, app);