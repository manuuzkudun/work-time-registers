'use strict';

const mongoose = require('mongoose');
const config = require('./db_config');

mongoose.connect(config.ext_db_uri, (err, db) => {
  if (!err) {
    console.log("We are connected to mongoDb");
  }
});

module.exports = mongoose.connection;