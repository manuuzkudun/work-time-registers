angular.module('data').factory('registersFactory', function (timeFactory) {
  
  /***** Private methods ******/
  
  var getStartWork = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'start'});
    if (candidates && candidates.length > 0) {
      // TO-DO: take index which register is earliest
      var index = 0;
      return candidates[index];
    } else {
      return 'null';
    }
  };
  
  var getLeaveWork = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'leave'});
    if (candidates && candidates.length > 0) {
      // TO-DO: take index which register is latest
      var index = candidates.length - 1;
      return candidates[index];
    } else {
      return 'null';
    }
  };
  
  var getRestStart = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'start-rest'});
    if (candidates && candidates.length > 0) {
      return candidates;
    } else {
      return 'null';
    }
  };
  
  var getRestEnd = function(dayRegisters) {
    var candidates = _.where(dayRegisters, {action: 'end-rest'});
    if (candidates && candidates.length > 0) {
      return candidates;
    } else {
      return 'null';
    }
  };
  
  var getDayRegisters = function(date, registers) {
    return _.where(registers, {date: date});
  };
  
  var getDates = function(registers) {
    return _.unique(registers, function (register) {
      return register.date;
    }).map(function (register) {
      return register.date;
    });
  };
  
  var sortRegistersByDateTime = function(registers){
    return _.sortBy(registers, function(register){
      return new Date(register.dateTime);
    });
  };
  
  var sortRegistersByDate = function(registers){
    return _.sortBy(registers, function(register){
      return new Date(register.date);
    });
  };
  
  
  var isRestDataCorrect = function(startRest, endRest) {
    return (startRest.length > 0) && (endRest.length > 0) && (startRest.length == endRest.length) && (startRest != 'null') && (endRest != 'null');
  };
  
  
  var computeTotalRest = function(startRest, endRest) {
    if ( isRestDataCorrect(startRest, endRest) ) {
      var startRestSorted = sortRegistersByDateTime(startRest);
      var endRestSorted = sortRegistersByDateTime(endRest);
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
  
  var computeTotalWork = function(startWork, leaveWork, totalRest) {
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
  
  
  var calculateWeekWork = function(weekData){
    var dayWorkTimes = weekData.map(function(day){
      return day.totalWork;
    });
    return timeFactory.sumTimeDurations(dayWorkTimes);
  };
  
  /***** End of private methods ******/
  
  var registersFactory = {
    getDaySummaries: function(registers) {
      var dates = getDates(registers);
      return  dates.map(function (date) {
        var dayRegisters = getDayRegisters(date, registers);
        var startWork = getStartWork(dayRegisters);
        var leaveWork = getLeaveWork(dayRegisters);
        var restStart = getRestStart(dayRegisters);
        var restEnd = getRestEnd(dayRegisters);
        var dateTime = dayRegisters[0].dateTime;
        var totalRest = computeTotalRest(restStart, restEnd);
        var totalWork = computeTotalWork(startWork, leaveWork, totalRest);
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
    },
    getWeekSummaries: function(dayData){
      var weekData =  _.groupBy(dayData, function (day) {
        return moment(day.date, 'DD/MM/YYYY').startOf('isoWeek');
      });
      return Object.keys(weekData).map( function(week){
        return {
          dateTime: weekData[week][0].dateTime,
          firstWeekDay: weekData[week][0].date,
          lastWeekDay: weekData[week][weekData[week].length -1].date,
          data: weekData[week],
          totalWork: calculateWeekWork(weekData[week])
        };
      });
    }
  }; 
  
  return registersFactory;
  
});