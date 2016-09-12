'use strict';

const express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Register = require("../Register");


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
Register.find({employeeId: req.params.id}).exec((err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;