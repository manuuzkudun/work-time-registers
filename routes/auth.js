'use strict';

const express = require('express'),
      router = express.Router(),
      Employee = require("../models/Employee"),
      service = require('../middleware/service'),
      dateFormat = require('dateformat'),
      middleware = require('../middleware/middleware');


router.post('/signup', (req,res) => {
  const employee = new Employee(req.body);
  employee.save( err => {
    if (err) throw err;
    return res
      .status(200)
      .send({token: service.createToken(employee)});
  }); 
});


router.post('/login', (req,res) => {
  Employee.findOne({email: req.body.email.toLowerCase()}, (err, user) => {
    if (err) throw err;
    if (user) {
      if (req.body.password == user.password ) {
        return res
          .status(200)
          .send({
            token: service.createToken(user)
          });
      } else {
        
      }
    } else {
      
    }
});
});

router.get('/private',middleware.ensureAuthenticated, (req,res) => {
  Employee.findOne({_id: req.user}, (err,user) => {
    if (err) throw err;
    if (user){
      const data = {
        _id: user._id,
        name: user.name,
        email: user.email,
        registers: user.registers.map( (reg) => { 
          return {
            dateTime: reg.dateTime,
            date: dateFormat(reg.dateTime,"dd/mm/yyyy"),
            time: dateFormat(reg.dateTime,"HH:MM:ss"),
            action: reg.action
          };
        })
      };
      res.json(data);
    } else {
      res.status(400).send({ message: 'User is not logged' });
    }
  });
});

module.exports = router;