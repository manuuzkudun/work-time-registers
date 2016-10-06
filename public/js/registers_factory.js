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
  
  registersFactory.sortRegistersByDateTime = function(registers){
    return _.sortBy(registers, function(register){
      return new Date(register.dateTime);
    });
  };
  
  registersFactory.sortRegistersByDate = function(registers){
    return _.sortBy(registers, function(register){
      return new Date(register.date);
    });
  };
  
  
  // Refractor!!!
  registersFactory.isRestDataCorrect = function(startRest, endRest) {
    return (startRest.length > 0) && (endRest.length > 0) && (startRest.length == endRest.length) && (startRest != 'null') && (endRest != 'null');
  };
  
  registersFactory.computeTotalRest = function(startRest, endRest) {
    if ( registersFactory.isRestDataCorrect(startRest, endRest) ) {
      var startRestSorted = registersFactory.sortRegistersByDateTime(startRest);
      var endRestSorted = registersFactory.sortRegistersByDateTime(endRest);
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
    var dates = registersFactory.getDates(registers);
    return  dates.map(function (date) {
      var dayRegisters = registersFactory.getDayRegisters(date, registers);
      var startWork = registersFactory.getStartWork(dayRegisters);
      var leaveWork = registersFactory.getLeaveWork(dayRegisters);
      var restStart = registersFactory.getRestStart(dayRegisters);
      var restEnd = registersFactory.getRestEnd(dayRegisters);
      var dateTime = dayRegisters[0].dateTime;
      var totalRest = registersFactory.computeTotalRest(restStart, restEnd);
      var totalWork = registersFactory.computeTotalWork(startWork, leaveWork, totalRest);
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
  
  
  registersFactory.calculateWeekWork = function(weekData){
    var dayWorkTimes = weekData.map(function(day){
      return day.totalWork;
    });
    return timeFactory.sumTimeDurations(dayWorkTimes);
  }
 
  registersFactory.weekSummary = function(dayData){
    var weekData =  _.groupBy(dayData, function (day) {
      return moment(day.date, 'DD/MM/YYYY').startOf('isoWeek');
    });
    return Object.keys(weekData).map( function(week){
      return {
        dateTime: weekData[week][0].dateTime,
        firstWeekDay: weekData[week][0].date,
        lastWeekDay: weekData[week][weekData[week].length -1].date,
        data: weekData[week],
        totalWork: registersFactory.calculateWeekWork(weekData[week])
      };
    });
  };
  
  return registersFactory;

});