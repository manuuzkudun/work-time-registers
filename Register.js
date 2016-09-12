'use strict';

const mongoose = require('mongoose');


// Connect to mongodb (using mongoose) and set the database connection
mongoose.connect("mongodb://localhost:27017/test", (err, db) => {
  if (!err) {
    console.log("We are connected to mongoDb");
  }
});


// Mongoose time registration model
var Register = mongoose.model('Register', {
  employeeId: String
  , employeeName: String
  , dateTime: Date
  , action: String
});

/*
Register.remove({}, (err) => {
  if (err) throw err;
  console.log('Removed all time registrations from the database');
});
*/

module.exports = Register;