'use strict';

const mongoose = require('mongoose'),
      db = require('../config/db');


const registerSchema = mongoose.Schema({
  dateTime: Date,
  action: String
});

const Employee = mongoose.model('Employee', {
  _id: Number, 
  name: String,
  email: String,
  password: String,
  registers: [registerSchema]
});



module.exports = Employee;