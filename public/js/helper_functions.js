function timeDifference(reg1, reg2) {
  var start = reg1.date + " " + reg1.time;
  var end = reg2.date + " " + reg2.time;
  return moment.utc(moment(end, "DD/MM/YYYY HH:mm:ss").diff(moment(start, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
}

function getDayRegisters(date, registers) {
  return _.where(registers, {
    date: date
  });
}

function sumTimeDurations(timeStringArray){
  
  var secs = 0, mins = 0, hours = 0;
  for (i= 0; i < timeStringArray.length; i++){
    var t = getHoursMinsSecs(timeStringArray[i]);
    var secsSum = t.secs + secs;
    secs = secsSum % 60;
    var secsMins = Math.floor(parseInt(secsSum / 60));
    var minsSum = t.mins + mins + secsMins;
    mins = minsSum % 60;
    var minsHours = Math.floor(parseInt(minsSum / 60));
    hours = t.hours + hours + minsHours;
  }
  return formatTimeNumber(hours) + ":" + formatTimeNumber(mins) + ":" +  formatTimeNumber(secs); 
}


function getHoursMinsSecs(timeString){
  var timeArray = timeString.split(':');
  return {
    hours: parseInt(timeArray[0]),
    mins: parseInt(timeArray[1]),
    secs: parseInt(timeArray[2])
  }
}

function formatTimeNumber(number){
  var numberString = number.toString();
  if (numberString.length == 1) {
    numberString = "0" + numberString;
  }
  return numberString;
}

function getStartWork(dayRegisters) {
  var candidates = _.where(dayRegisters, {
    action: 'start'
  });
  if (candidates.length > 0) {
    var index = 0;
    return candidates[index];
  }
  else {
    return {
      dateTime: 'NO-DATA'
    };
  }
}

function getLeaveWork(dayRegisters) {
  var candidates = _.where(dayRegisters, {
    action: 'leave'
  });
  if (candidates.length > 0) {
    var index = candidates.length - 1;
    return candidates[index];
  }
  else {
    return {
      dateTime: 'NO-DATA'
    };
  }
}

function getRestStart(dayRegisters) {
  var candidates = _.where(dayRegisters, {
    action: 'start-rest'
  });
  if (candidates.length > 0) {
    return candidates;
  }
  else {
    return {
      dateTime: 'NO-DATA'
    };
  }
}

function getRestEnd(dayRegisters) {
  var candidates = _.where(dayRegisters, {
    action: 'end-rest'
  });
  if (candidates.length > 0) {
    return candidates;
  }
  else {
    return {
      dateTime: 'NO-DATA'
    };
  }
}

function getDates(registers) {
  var dates = _.unique(registers, function (register) {
    return register.date;
  }).map(function (register) {
    return register.date;
  });
  return dates;
}

function computeTotalWork(startWork, leaveWork) {
  if (startWork && leaveWork) {
    return timeDifference(startWork, leaveWork) ;
  }
  else {
    return 'NO-DATA';
  }
}

function sortRegistersByDate(registers){
  var sortedRegisters = _.sortBy(registers, function(register){
    return new Date(register.dateTime);
  });
  return sortedRegisters;
}

function isRestDataCorrect(startRest, endRest) {
  return (startRest.length > 0) && (endRest.length > 0) && (startRest.length == endRest.length);
}

function computeTotalRest(startRest, endRest) {
  var startRestSorted = sortRegistersByDate(startRest);
  var endRestSorted = sortRegistersByDate(endRest);
  if ( isRestDataCorrect(startRestSorted, endRestSorted) ) {
    var restDurations = [];
    for (i=0; i < startRest.length; i++){
      restDurations.push( timeDifference(startRestSorted[i], endRestSorted[i]) );
    }
    return sumTimeDurations(restDurations);
  } else {
    return 'NO_DATA';
  }
}