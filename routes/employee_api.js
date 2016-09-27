'use strict';

const express = require('express'),
      router = express.Router(),
      dateFormat = require('dateformat'),
      Employee = require("../models/Employee"),
      middleware = require('../services/auth_middleware');


router.get('/employee',middleware.ensureAuthenticated, (req,res) => {
  Employee.findOne({_id: req.user}, (err,user) => {
    if (err) throw err;
    if (user){
      const data = {
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
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



router.get('/employees/names', (req,res) => {
  Employee.find({}, '_id name', (err,results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;