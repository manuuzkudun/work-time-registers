'use strict'

const express = require('express'),
			app = express(),
			csv = require('csv-parser'),
			fs = require('fs'),
			dateFormat = require('dateformat');



app.set('port',process.env.PORT || 3000);

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
    console.log(dataFiltered);
    workTimeArray.push(dataFiltered);
  });



app.get('/',(req,res) => {
	res.json(workTimeArray);
});

app.listen(app.get('port'),() => {
	console.log(`Example app listening on port ${app.get('port')}!`);
});