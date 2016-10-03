'use strict';

const mongoose = require('mongoose');
const Employee = require("../models/Employee");

Employee.remove({}, err => {
  if (err) throw err;
  console.log('Removed all employee records from the database');
});


mongoose.disconnect();