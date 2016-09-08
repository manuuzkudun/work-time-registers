'use strict';

const express = require('express')
  , router = express.Router()
  , _ = require('underscore');

var workTimeArray = require('../dataManagement');
router.get('/api/time-reg/list', (req, res) => {
  res.json(workTimeArray);
});


router.post('/api/time-reg',(req,res) =>{
  console.log(req.body);
    var filtered = _.where(workTimeArray, {
    Name: req.body.name
  });
  res.json(filtered);
  
  
});

router.get('/api/time-reg/:id', (req, res) => {
  var filtered = _.where(workTimeArray, {
    Id: req.params.id
  });
  res.json(filtered);
});

module.exports = router;