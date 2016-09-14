'use strict';

const mongoose = require('mongoose'),
      db = require('../config/db');

var Employee = mongoose.model('Employee', {
  _id: String
  , name: String
  , email: String
  , password: String
});

module.exports = Employee;