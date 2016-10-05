angular.module('data').factory('registersFactory', function (timeFactory) {
  
  var registersFactory = {};
  
  registersFactory.getDayRegisters = function(date, registers) {
    return _.where(registers, {date: date});
  };
  
  registersFactory.getStartWork = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'start'});
    if (candidates && candidates.length > 0) {
      // TO-DO: take index which register is earliest
      var index = 0;
      return candidates[index];
    } else {
      return 'null';
    }
  };
  
  registersFactory.getLeaveWork = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'leave'});
    if (candidates && candidates.length > 0) {
      // TO-DO: take index which register is latest
      var index = candidates.length - 1;
      return candidates[index];
    } else {
      return 'null';
    }
  };
  
  registersFactory.getRestStart = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'start-rest'});
    if (candidates && candidates.length > 0) {
      return candidates;
    } else {
      return 'null';
    }
  };
  
  registersFactory.getRestEnd = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'end-rest'});
    if (candidates && candidates.length > 0) {
      return candidates;
    } else {
      return 'null';
    }
  };
  
  registersFactory.getDates = function(registers) {
    return _.unique(registers, function (register) {
      return register.date;
    }).map(function (register) {
      return register.date;
    });
  };
  
  registersFactory.sortRegistersByDate = function(registers){
    return _.sortBy(registers, function(register){
      return new Date(register.dateTime);
    });
  };
  
  // Refractor!!!
  registersFactory.isRestDataCorrect = function(startRest, endRest) {
    return (startRest.length > 0) && (endRest.length > 0) && (startRest.length == endRest.length) && (startRest != 'null') && (endRest != 'null');
  };
  
  registersFactory.computeTotalRest = function(startRest, endRest) {
    if ( isRestDataCorrect(startRest, endRest) ) {
      var startRestSorted = this.sortRegistersByDate(startRest);
      var endRestSorted = this.sortRegistersByDate(endRest);
      var restDurations = [];
      for (i=0; i < startRest.length; i++){
        var start = startRestSorted[i].date + " " + startRestSorted[i].time;
        var end = endRestSorted[i].date + " " + endRestSorted[i].time;
        restDurations.push( timeFactory.timeDifference(start, end) );
      };
      return timeFactory.sumTimeDurations(restDurations);
    } else {
      return 'null';
    }
  };
  
  registersFactory.computeTotalWork = function(startWork, leaveWork, totalRest) {
    if (startWork && leaveWork &&  totalRest && startWork != 'null' && leaveWork != 'null' && totalRest != 'null') {
      var start = startWork.date + " " + startWork.time;
      var end = leaveWork.date + " " + leaveWork.time;
      var startEnd = timeFactory.timeDifference(start, end);
      start = startWork.date + " " + totalRest;
      end = leaveWork.date + " " + startEnd;
      return timeFactory.timeDifference(start, end);
    } else {
      return 'null';
    }
  };
  
  registersFactory.processData = function(registers) {
    var dates = getDates(registers);
    return  dates.map(function (date) {
      var dayRegisters = this.getDayRegisters(date, registers);
      var startWork = this.getStartWork(dayRegisters);
      var leaveWork = this.getLeaveWork(dayRegisters);
      var restStart = this.getRestStart(dayRegisters);
      var restEnd = this.getRestEnd(dayRegisters);
      var dateTime = dayRegisters[0].dateTime;
      var totalRest = this.computeTotalRest(restStart, restEnd);
      var totalWork = this.computeTotalWork(startWork, leaveWork, totalRest);
      return ({
        date: date,
        startWork: startWork.time || 'null',
        endWork: leaveWork.time || 'null',
        totalRest: totalRest,
        totalWork: totalWork,
        dateTime: dateTime,
        dayRegisters: dayRegisters
      });
    });
 };
 
  
  return registersFactory;

});