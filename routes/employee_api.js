'use strict';
const express = require('express');
const router = express.Router();
const _ = require('underscore');
const dateFormat = require('dateformat');
const Employee = require("../models/Employee");
const middleware = require('../services/auth_middleware');

router.get('/employee', middleware.ensureAuthenticated, (req, res) => {
  Employee.findOne({
    _id: req.employee
  }, (err, employee) => {
    if (err) throw err;
    if (employee) {
      const data = {
        _id: employee._id,
        name: employee.name,
        email: employee.email,
        admin: employee.admin,
        registers: employee.registers.map((reg) => {
          return {
            dateTime: reg.dateTime,
            date: dateFormat(reg.dateTime, "dd/mm/yyyy"),
            time: dateFormat(reg.dateTime, "HH:MM:ss"),
            action: reg.action
          };
        })
      };
      res.json(data);
    } else {
      res.status(400).send({
        message: 'Employee is not logged'
      });
    }
  });
});

router.put('/employee', middleware.ensureAuthenticated, (req, res) => {
  const updatedRegisters = req.body.data;
  Employee.findOne({
    _id: req.employee
  }, (err, employee) => {
    updatedRegisters.forEach(updReg => {
      employee.registers.map( reg => {
        if (reg.dateTime === updReg.dateTime){
          return {dateTime: reg.dateTime, action: updReg.action}
        }
      })
    })
    employee.save(error => {
      if (error) throw error
      res.send({msg: 'success'})
    })
  });
});

      router.get('/employees/names', (req, res) => {
        Employee.find({}, '_id name', (err, results) => {
          if (err) throw err;
          res.json(results);
        });
      });
      module.exports = router;
