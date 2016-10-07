angular.module('data').factory('timeFactory', function () {
  
  
  // Add a 0 before a number if the number has 1 digit
  // Ex: 3 -> 03
  // Need to refractor
  var formatTimeNumber = function(number){
    var numberString = number.toString();
    if (numberString.length == 1) {
      numberString = "0" + numberString;
    }
    return numberString;
  };
  
  // Given a time in a string format of HH:mm:ss
  // Returns an object with hours, mins and secs
  var getHoursMinsSecs = function(timeString){
    var timeArray = timeString.split(':');
    return {
      hours: parseInt(timeArray[0]),
      mins: parseInt(timeArray[1]),
      secs: parseInt(timeArray[2])
    }
  };
  
  var timeFactory = {};
  
  // Calculates the time difference in HH:mm:ss
  // between tow times given in HH:mm:ss
  timeFactory.timeDifference = function(start, end) {
    return moment.utc(moment(end, "DD/MM/YYYY HH:mm:ss")
      .diff(moment(start, "DD/MM/YYYY HH:mm:ss")))
      .format("HH:mm:ss");
  };
  

  // Given an array whose elements are times given in HH:mm:ss format
  // Calculate the total suma of these time durations in HH:mm:ss format
  // If one of the elements is null skip it
  timeFactory.sumTimeDurations = function(timeStringArray){
    var secs = 0, mins = 0, hours = 0;
    for (i= 0; i < timeStringArray.length; i++){
      if (timeStringArray[i] == 'null') {
        continue;
      } else {
        var t = getHoursMinsSecs(timeStringArray[i]);
        var secsSum = t.secs + secs;
        secs = secsSum % 60;
        var secsMins = Math.floor(parseInt(secsSum / 60));
        var minsSum = t.mins + mins + secsMins;
        mins = minsSum % 60;
        var minsHours = Math.floor(parseInt(minsSum / 60));
        hours = t.hours + hours + minsHours;
      }
    }
    return formatTimeNumber(hours) + ":" + formatTimeNumber(mins) + ":" + formatTimeNumber(secs); 
  };
  
  
  return timeFactory;

});
  


  
