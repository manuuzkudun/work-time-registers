const express = require('express'),
			app = express(),
			csv = require('csv-parser'),
			fs = require('fs');

var workTimeArray = [];

fs.createReadStream('horarios.csv')
  .pipe(csv({
		separator: '\t',
		headers: ['EmployeeId', 'DateTime','ni1', 'ni2','EmployeeName', 'Action','nil3', 'nil4']
	}))
  .on('data', (data) => {
    //TODO: Pass a filtered object to the array
    console.log(data);
    workTimeArray.push(data);
  });
console.log(workTimeArray);
// app.get('/',(req,res) => {
// 	res.send('Hello World');
// });

// app.listen(3000,() => {
// 	console.log('Example app listening on port 3000!');
// });