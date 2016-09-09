'use strict';

const csv = require('csv-parser')
  , fs = require('fs')
  , dateFormat = require('dateformat')
  , mysql = require('mysql')
  , mongoose = require('mongoose')
  , actions = {
    'I': 'start'
    , 'O': 'leave'
    , '0': 'start-rest'
    , '1': 'end-rest'
  };


// Connect to mongodb (using mongoose) and set the database connection
mongoose.connect("mongodb://localhost:27017/test", (err,db) =>{
  if(!err){
    console.log("We are connected to mongoDb");
  }
});





/*var connection = mysql.createConnection({
  host: 'localhost'
  , user: 'root'
  , password: 'alpha1'
  , database: 'gestion_horas'
});

connection.connect();

connection.query('SELECT * FROM users', function (err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].email);
});

connection.end();*/





var workTimeArray = [];

fs.createReadStream('records.csv').pipe(csv({
  separator: '\t'
  , headers: ['Id', 'DateTime', 'ni1', 'ni2', 'Name', 'Action', 'nil3', 'nil4']
})).on('data', (data) => {
  
  
  
  let date = new Date(data.DateTime);
  let dataFiltered = {
    Id: data.Id
    , Name: data.Name
    , Date: dateFormat(date, "dd/mm/yyyy")
    , DateTime: data.DateTime
    , Time: dateFormat(date, "HH:MM:ss")
    , Action: actions[data.Action]
  };
  workTimeArray.push(dataFiltered);
});





var Register = mongoose.model('Register', { 
  employeeId: String,
  employeeName: String,
  dateTime: Date,
  action: String
});

var reg = new Register({
  employeeId: '1',
  employeeName: 'Manu uzkudun',
  dateTime: Date.Now,
  action: 'start'
});




reg.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

Register.find({}).exec((err,results) =>{
  console.log(results);
});


module.exports = workTimeArray;