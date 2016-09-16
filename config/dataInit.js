'use strict';

const _ = require('underscore'),
      Employee = require("../models/Employee");

exports.employees = [
  {
    _id: 1
    , name: 'Manu Uzkudun'
    , email: 'uzkudun@mdpi.com'
    , password: '12345'
  }
];

exports.loadInitDataToDb = (employees,registers) => {
  employees.forEach(employee => {
    const empl = new Employee(employee);
    const employeeRegs = _.where(registers,{employeeId: empl._id });
    employeeRegs.forEach(register => {
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
};

exports.removeEmployeeData = () => {
  Employee.remove({}, err => {
    if (err) throw err;
    console.log('Removed all employee records from the database');
  });
};


