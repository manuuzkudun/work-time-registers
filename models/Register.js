'use strict';

const mongoose = require('mongoose'),
      db = require('../config/db');

var Register = mongoose.model('Register', {
  _id: Number,
  employee : { type: Number, ref: 'Employee' },
  dateTime: Date,
  action: String
});

module.exports = Register;