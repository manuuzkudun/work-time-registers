'use strict'

const express = require('express'),
			app = express();

// Configure express app
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

// Load routes
app.use( require('./routes/index') );
app.use(require('./routes/employees'));


app.listen(app.get('port'),() => {
	console.log(`Example app listening on port ${app.get('port')}!`);
});