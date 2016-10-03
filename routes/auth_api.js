'use strict';

const express = require('express');
const router = express.Router();
const Employee = require("../models/Employee");
const token = require('../services/token');


router.post('/signup', (req,res) => {
  const employee = new Employee(req.body);
  employee.save( err => {
    if (err) throw err;
    return res.status(200).send({token: token.createToken(employee)});
  }); 
});


router.post('/login', (req,res) => {
  Employee.findOne({email: req.body.email.toLowerCase()}, (err, user) => {      
    if (err) throw err;
    if (user) {
      if (req.body.password == user.password ) {
        return res.status(200).send({token: token.createToken(user)});
      } else {
        
      }
    } else {
      
    }
  });
});

module.exports = router;