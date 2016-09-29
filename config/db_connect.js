'use strict';

const mongoose = require('mongoose'),
      config = require('./db_config');

mongoose.connect(config.local_db_uri, (err, db) => {
  if (!err) {
    console.log("We are connected to mongoDb");
  }
});

module.exports = mongoose.connection;