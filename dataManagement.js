'use strict'

const	csv = require('csv-parser'),
			fs = require('fs'),
			dateFormat = require('dateformat'),
			actions = {'I': 'start', 'O': 'leave', '0': 'start-rest', '1': 'end-rest' };



var workTimeArray = [];

fs.createReadStream('records.csv')
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
  		Action: actions[data.Action]
  	};

    workTimeArray.push(dataFiltered);
  });

 module.exports = workTimeArray;
