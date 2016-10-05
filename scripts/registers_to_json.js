'use strict';

const fs = require('fs');
const actions = {
  'I': 'start'
  , 'O': 'leave'
  , '0': 'start-rest'
  , '1': 'end-rest'
};

const dataString = fs.readFileSync("./data/records.csv", "UTF-8");
let registersData = dataString.split('\n'); 
registersData = registersData.map( record => {
  const values = record.split('\t');
  return ({
    _id: registersData.indexOf(record),
    employeeId: parseInt(values[0]),
    dateTime: values[1],
    action: actions[values[5]]
  });
});

module.exports = registersData;