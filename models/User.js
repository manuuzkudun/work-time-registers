'use strict';

const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
  id: String
  , name: String
  , email: String
  , password: String
});

Employee.remove({}, (err) => {
  if (err) throw err;
  console.log('Removed all employees from the database');
});


module.exports = Employe;