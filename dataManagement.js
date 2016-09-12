'use strict';

const csv = require('csv-parser')
  , fs = require('fs')
  , Register = require('./Register');


const actions = {
  'I': 'start'
  , 'O': 'leave'
  , '0': 'start-rest'
  , '1': 'end-rest'
};

function parseAndSaveAllRegs(path, csvOptions) {
  var count = 0;
  fs.createReadStream('records.csv').pipe(csv({
    separator: '\t'
    , headers: ['Id', 'DateTime', 'ni1', 'ni2', 'Name', 'Action', 'nil3', 'nil4']
  })).on('data', (data) => {
    let reg = new Register({
      employeeId: data.Id
      , employeeName: data.Name
      , dateTime: data.DateTime
      , action: actions[data.Action]
    });
    reg.save(err => {
      if (err) throw err;
    });
    count += 1;
  }).on('end', () => {
    console.log(`Inserted ${count} time registrations`)
  });
}


//parseAndSaveAllRegs('/records.csv',csvOptions);
module.exports = parseAndSaveAllRegs;