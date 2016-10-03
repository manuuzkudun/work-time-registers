'use strict';

const mongoose = require('mongoose');
const db = require('../config/db_connect');


const registerSchema = mongoose.Schema({
  dateTime: Date,
  action: String
});

const Employee = mongoose.model('Employee', {
  _id: Number, 
  name: String,
  email: String,
  password: String,
  registers: [registerSchema],
  admin: Boolean
});



module.exports = Employee;