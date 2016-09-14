'use strict';

const express = require('express')
  , router = express.Router()
  , Register = require("../models/Register");


router.get('/registers', (req, res) => {
  Register.find({}).exec((err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


router.get('/registers/:id', (req, res) => {
  Register.find({employeeId: req.params.id}).exec((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


router.post('/registers',(req,res) => {
  var reg = new Register({
    employeeId: req.body.employeeId
  , employeeName: req.body.name
  , dateTime: req.body.dateTime
  , action: req.body.action
  });
  reg.save( (err, data) => {
    if (err) console.log(err);
    else console.log('Saved ', data );
  });
});



module.exports = router;