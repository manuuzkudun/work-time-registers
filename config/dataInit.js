'use strict';

const Register = require("../models/Register")
  , Employee = require("../models/Employee");
exports.employeeData = [
  {
    _id: '1'
    , name: 'Manu Uzkudun'
    , email: 'uzkudun@mdpi.com'
    , password: '12345'
  }
];


exports.loadEmployeeData = (employeeData) => {
  employeeData.forEach(function (emp) {
    let employee = new Employee(emp);
    employee.save((err, data) => {
      if (err) console.log(err);
      else console.log('Saved ', data);
    });
  });
};
exports.loadRegisterData = (registerData) => {
  registerData.forEach(function (reg) {
    let register = new Register(reg);
    register.save((err, data) => {
      if (err) console.log(err);
      else console.log('Saved ', data);
    });
  });
};
exports.removeEmployeeData = () => {
  Employee.remove({}, err => {
      if (err) throw err;
      console.log('Removed all employee records from the database');
    });
  };
exports.removeRegisterData = () => {
  Register.remove({}, err => {
      if (err) throw err;
      console.log('Removed all register records from the database');
    });
  };