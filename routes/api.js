'use strict';

const express = require('express')
  , router = express.Router()
  , _ = require('underscore')
  , mongoose = require('mongoose')
  , Register = require("../dataManagement");


router.get('/api/time-reg/list', (req, res) => {
  Register.find({}).exec((err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/api/time-reg', (req, res) => {
  Register.find({employeeName: req.body.name}).exec((err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/api/time-reg/:id', (req, res) => {
  var filtered = _.where(registerData, {
    Id: req.params.id
  });
  res.json(filtered);
});

module.exports = router;