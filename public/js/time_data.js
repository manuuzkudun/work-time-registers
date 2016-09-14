

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

  function timeDifference(dateTime1, dateTime2) {
    var diff = new Date(dateTime2) - new Date(dateTime1);
    var seconds = diff / 1000;
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    return hours + ":" + minutes + ":" + seconds;
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
    $http.get('http://localhost:3000/api/time-reg/list').success(function (data) {
      $scope.names = getProps(data, 'employeeName');  
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
  
  
  
  $scope.getEmployeeData = function () {
    var req = {
      method: 'POST'
      , url: 'http://localhost:3000/api/time-reg'
      , headers: {
        'Content-Type': 'application/json'
      }
      , data: {
        name: $scope.reqEmployee
      }
    };
    
    $http(req).then(function (response) {
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
      var totalWork = computeTotalWork(startWork,leaveWork);

        return ({
          Date: date
          , startWork: startWork.dateTime
          , endWork: leaveWork.dateTime
          , totalWork: totalWork
        });
      });
    }, function (resonse) {
      console.log('Error');
    });
  }
});