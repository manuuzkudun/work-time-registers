'use strict';

const fs = require('fs');
const actions = {
  'I': 'start'
  , 'O': 'leave'
  , '0': 'start-rest'
  , '1': 'end-rest'
};

module.exports = dataPath => {
  const registersData = fs.readFileSync(dataPath, "UTF-8").split('\n');
  return registersData.map( record => {
    const values = record.split('\t');
    return ({
      _id: registersData.indexOf(record),
      employeeId: parseInt(values[0]),
      dateTime: values[1],
      action: actions[values[5]]
    });
  });
};