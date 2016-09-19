var timeData = angular.module("timeData",[]);

timeData.controller('myController', function ($scope, $http) {  
  $scope.data = null;
  $scope.dataProcessed = null;
  getEmployees();

  
  $scope.sortComment = function(comment) {
    var date = new Date(comment.dateTime);
    return date;
};

  function timeDifference(dateTime1,dateTime2){
    var start = new Date(dateTime1);
    var end = new Date(dateTime2);
    return countdown(start,end); 
  }
    
  function getEmployees() {
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
  
  $scope.getEmployeeData = function () {  
    var url = 'http://localhost:3000/api/employee/1';
    $http.get(url).then(function (response) {
      var data = response.data.data;
      $scope.registers = data.registers;
      $scope.name = data.name;
      $scope.email = data.email;
      
      var dates = getDates(data.registers);
      console.log(dates);
      

      
    });
  };
  


/*           var dates = _.unique(data,function(record){
        return moment(record.dateTime).format("DD/MM/YYYY");
      }).map(function(record){
        return moment(record.dateTime).format("DD/MM/YYYY");
      });*/
      

/*      $scope.dataProcessed = dates.map(function (date) {

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
      });*/

});