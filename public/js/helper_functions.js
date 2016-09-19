function timeDifference(reg1, reg2){
var start = reg1.date + " " + reg1.time;
var end = reg2.date + " " + reg2.time;
  
return  moment.utc(moment(end,"DD/MM/YYYY HH:mm:ss").diff(moment(start,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
  return a;
  
}



function getDayRegisters(date,registers){
  return _.where(registers, {date: date});
}

function getStartWork(dayRegisters){
  var candidates = _.where(dayRegisters,{action: 'start'});
  if (candidates.length > 0){
    var index = 0;
    return candidates[index];
  } else {
    return {dateTime: 'NO-DATA'};
  }
}


function getLeaveWork(dayRegisters){
  var candidates = _.where(dayRegisters,{action: 'leave'});
  if (candidates.length > 0){
    var index = candidates.length -1;
    return candidates[index];
  } else {
    return {dateTime: 'NO-DATA'};
  }
}


function getRestStart(dayRegisters){
  var candidates = _.where(dayRegisters,{action: 'start-rest'});
  if (candidates.length > 0){
    return candidates;
  } else {
    return {dateTime: 'NO-DATA'};
  }
}


function getRestEnd(dayRegisters){
  var candidates = _.where(dayRegisters,{action: 'end-rest'});
  if (candidates.length > 0){
    return candidates;
  } else {
    return {dateTime: 'NO-DATA'};
  }
}

function getDates(registers){
  var dates = _.unique(registers, function(register) {
    return register.date;
  }).map(function(register) {
    return register.date;
  });
  return dates;     
} 

  function computeTotalWork(startWork,leaveWork){
    if (startWork.dateTime && leaveWork.dateTime){
      return timeDifference(startWork.dateTime, leaveWork.dateTime);
    } else {
      return 'NO-DATA';
    }
  }
  
  function computeTotalRest(startRest,endRest){
    if ((startRest.length >0)  && (endRest.length > 0) && (startRest.length == endRest.length)) {
         return timeDifference(startRest[0],endRest[0]);
    } else {
      return 'NO_DATA';
    }
    
  }