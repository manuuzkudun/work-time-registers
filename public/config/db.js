'use strict';

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test", (err, db) => {
  if (!err) {
    console.log("We are connected to mongoDb");
  }
});

module.exports = mongoose.connection;