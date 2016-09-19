/*  function timeDifference(dateTime1, dateTime2) {
    var diff = new Date(dateTime2) - new Date(dateTime1);
    var seconds = diff / 1000;
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    return hours + ":" + minutes + ":" + seconds;
  }*/

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
         return timeDifference(startRest[0].dateTime,endRest[0].dateTime);
    } else {
      return 'NO_DATA';
    }
    
  }