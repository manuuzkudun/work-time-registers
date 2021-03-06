'use strict';
const _ = require('underscore');
const mongoose = require('mongoose');
const Employee = require("../models/Employee");
const employees = require('../data/employees.json');
const registersToJSON = require('./registers_to_json');
const dataPath = process.argv[2];
const registers = registersToJSON(dataPath);

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