'use strict';
const _ = require('underscore');
const mongoose = require('mongoose');
const Employee = require("../models/Employee");
const employees = require('../data/employees.json');
const registers = require('./registers_to_json');


employees.forEach( employee => {
  const empl = new Employee(employee);
  const employeeRegs = _.where(registers,{employeeId: empl._id });
  employeeRegs.forEach( register => {
      empl.registers.push({
        dateTime: register.dateTime,
        action: register.action
      });
    });
  empl.save( error =>{
    if (error) throw error;
    console.log('Employee saved');
  });
});

mongoose.disconnect();