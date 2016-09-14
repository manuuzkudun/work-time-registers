'use strict';

const mongoose = require('mongoose'),
      db = require('../config/db');



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