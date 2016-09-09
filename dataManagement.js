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

var csvOptions = {
  separator: '\t'
  , headers: ['Id', 'DateTime', 'ni1', 'ni2', 'Name', 'Action', 'nil3', 'nil4']
};

// Connect to mongodb (using mongoose) and set the database connection
mongoose.connect("mongodb://localhost:27017/test", (err, db) => {
  if (!err) {
    console.log("We are connected to mongoDb");
  }
});

/*  let date = new Date(data.DateTime);
  let dataFiltered = {
    Id: data.Id
    , Name: data.Name
    , Date: dateFormat(date, "dd/mm/yyyy")
    , DateTime: data.DateTime
    , Time: dateFormat(date, "HH:MM:ss")
    , Action: actions[data.Action]
  };
  workTimeArray.push(dataFiltered); */


// Mongoose time registration model
var Register = mongoose.model('Register', {
  employeeId: String
  , employeeName: String
  , dateTime: Date
  , action: String
});

function saveRegToDb(reg) {
  reg.save(function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function parseAndSaveAllRegs(path, csvOptions) {
  var count = 0;
  fs.createReadStream('records.csv').pipe(csv(csvOptions)).on('data', (data) => {
    let reg = new Register({
      employeeId: data.Id
      , employeeName: data.Name
      , dateTime: data.DateTime
      , action: actions[data.Action]
    });
    saveRegToDb(reg);
    count += 1;
  }).on('end', () => {
    console.log(`Inserted ${count} time registrations`)
  });
}

/*
  Register.find({}).exec((err, results) => {
    if (err) throw err;
    console.log(results);  
  });*/



/*
Register.remove({}, (err) => {
  if (err) throw err;
  console.log('Removed all time registrations from the database');
});
*/



//removeAllRegisters();
//parseAndSaveAllRegs('/records.csv',csvOptions);


// Export the Mongoose model
module.exports = Register;