'use strict'

const express = require('express'),
			app = express(),
			csv = require('csv-parser'),
			fs = require('fs'),
			dateFormat = require('dateformat'),
			_ = require('underscore');



app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

var workTimeArray = [];

fs.createReadStream('horarios.csv')
  .pipe(csv({
		separator: '\t',
		headers: ['Id', 'DateTime','ni1', 'ni2','Name', 'Action','nil3', 'nil4']
	})).on('data', (data) => {

  	let date = new Date(data.DateTime);

  	let dataFiltered = {
  		Id: data.Id,
  		Name: data.Name,
  		Date: dateFormat(date,"dd/mm/yyyy"),
  		Time: dateFormat(date,"hh:MM:ss"),
  	};

    workTimeArray.push(dataFiltered);
  });




app.use( require('./routes/index') );
app.use(require('./routes/employees'));


app.listen(app.get('port'),() => {
	console.log(`Example app listening on port ${app.get('port')}!`);
});