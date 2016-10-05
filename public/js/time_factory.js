angular.module('data').factory('timeFactory', [function () {
  
  var timeFactory = {};
  
  timeFactory.timeDifference = function(start, end) {
    return moment.utc(moment(end, "DD/MM/YYYY HH:mm:ss").diff(moment(start, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
  };
  
  timeFactory.sumTimeDurations = function(timeStringArray){
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
  };
  
  timeFactory.getHoursMinsSecs = function(timeString){
    var timeArray = timeString.split(':');
    return {
      hours: parseInt(timeArray[0]),
      mins: parseInt(timeArray[1]),
      secs: parseInt(timeArray[2])
    }
  };
  
  timeFactory.formatTimeNumber = function(number){
    var numberString = number.toString();
    if (numberString.length == 1) {
      numberString = "0" + numberString;
    }
    return numberString;
  };
  
  return timeFactory;

}]);