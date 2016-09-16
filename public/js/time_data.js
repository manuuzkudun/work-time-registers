

var timeData = angular.module("timeData",[]);


timeData.controller('myController', function ($scope, $http) {
  
  $scope.data = null;
  $scope.dataProcessed = null;
  getEmployeeNames();

  
  $scope.sortComment = function(comment) {
    var date = new Date(comment.dateTime);
    return date;
};
    
  function getProps(data, prop) {
    var props = data.map(function (obj) {
      return obj[prop];
    });
    props = props.filter(function (v, i) {
      return props.indexOf(v) == i;
    });
    return props;
  }


  function timeDifference(dateTime1,dateTime2){
    var start = new Date(dateTime1);
    var end = new Date(dateTime2);
    return countdown(start,end); 
  }
  
  function getDate(dateTimeString){
    var dateTime = new Date(dateTimeString);
    var day = dateTime.getDate(); 
    var month = date.getMonth(); 
    var year = date.getFullYear();
    var date = `${day}/${month}/${year}`
    return date;
  }
  
  function getEmployeeNames() {
    $http.get('http://localhost:3000/api/employees/names').success(function (data) {
      $scope.employees = data; 
    });
  }
  
  function getSpecificRecord(records,reqDate, reqAction) {
    var candidates = records.filter(function (record) {
      return (record.Date == reqDate && record.Action == reqAction);
        });
    var out =  (candidates.length > 0) ? candidates[0] : {'Time': 'NO-DATA'};
    return out;
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
  
  
/*  $scope.getEmployeeData = function () {

      
    var url = 'http://localhost:3000/api/registers/1';
    $http.get(url).then(function (response) {
        var data = response.data;
       $scope.data = data;
      
            var dates = _.unique(data,function(record){
        return moment(record.dateTime).format("DD/MM/YYYY");
      }).map(function(record){
        return moment(record.dateTime).format("DD/MM/YYYY");
      });
      

      $scope.dataProcessed = dates.map(function (date) {

        var dayRecords = data.filter(function(record){
          return(moment(record.dateTime).format("DD/MM/YYYY") == date);
        });

      var startWork = _.where(dayRecords,{action: 'start'})[0] || {dateTime: 'NO-DATA'};
      var leaveWork = _.where(dayRecords,{action: 'leave'})[0] || {dateTime: 'NO-DATA'};
      var restStart = _.where(dayRecords,{action: 'start-rest'});
      var restStart = _.where(dayRecords,{action: 'start-rest'});
      var restEnd = _.where(dayRecords,{action: 'end-rest'});
      var totalRest = computeTotalRest(restStart,restEnd);
      var totalWork = computeTotalWork(startWork,leaveWork);

        return ({
          Date: date
          , startWork: startWork.dateTime
          , endWork: leaveWork.dateTime
          , totalRest: totalRest.toString()
          , totalWork: totalWork
        });
      });

  });
  }*/
});