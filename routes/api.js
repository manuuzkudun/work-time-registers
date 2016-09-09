'use strict';

const express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , _ = require('underscore');

var Message = mongoose.model('Message', { 
  msg: String
});


//var msg = new Message({msg: 'Kaixo Manu'});
Message.find({}).exec((err,results) =>{
  console.log(results);
  
});

//msg.save();
// Connect to mongodb (using mongoose) and set the database connection
mongoose.connect("mongodb://localhost:27017/test", (err,db) =>{
  if(!err){
    console.log("We are connected to mongoDb");
  }
});

var workTimeArray = require('../dataManagement');

router.get('/api/time-reg/list', (req, res) => {
  res.json(workTimeArray);
});

router.post('/api/time-reg', (req, res) => {
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