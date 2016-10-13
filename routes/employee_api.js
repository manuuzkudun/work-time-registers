'use strict';
const express = require('express');
const router = express.Router();
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
						id: reg._id,
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



//TO-DO:  NEED TO REFRACTOR
router.put('/employee', middleware.ensureAuthenticated, (req, res) => {
	const updatedRegisters = req.body.data;
	Employee.findOne({
		_id: req.employee
	}, (err, employee) => {
		updatedRegisters.forEach(updReg => {
			employee.registers = employee.registers.map(reg => {
				if (reg._id == updReg.id && reg.action != updReg.action) {
					return {
						id: reg._id,
						dateTime: reg.dateTime,
						action: updReg.action
					};
				} else {
					return reg;
				}
			});
		});
		employee.save(error => {
			if (error) throw error;
			res.json({
				_id: employee._id,
				name: employee.name,
				email: employee.email,
				admin: employee.admin,
				registers: employee.registers.map((reg) => {
					return {
						id: reg._id,
						dateTime: reg.dateTime,
						date: dateFormat(reg.dateTime, "dd/mm/yyyy"),
						time: dateFormat(reg.dateTime, "HH:MM:ss"),
						action: reg.action
					};
				})
			});
		});
	});
});

router.get('/employees/names', (req, res) => {
	Employee.find({}, '_id name', (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});
module.exports = router;
