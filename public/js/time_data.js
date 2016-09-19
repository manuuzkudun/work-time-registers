var timeData = angular.module("timeData",[]);

timeData.controller('myController', function ($scope, $http) {  
  $scope.data = null;
  $scope.dataProcessed = null;
  getEmployees();

  
$scope.sortByDate = function(register) {
    var date = new Date(register.dateTime);
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
      $scope.registersProcessed = dates.map(function (date) {
        var dayRegisters = getDayRegisters(date,data.registers);
        var startWork = getStartWork(dayRegisters);
        var leaveWork = getLeaveWork(dayRegisters);
        var restStart = getRestStart(dayRegisters);
        var restStart = getRestEnd(dayRegisters);
        var dateTime = dayRegisters[0].dateTime;
        return ({
          date: date, 
          startWork: startWork.time,
          endWork: leaveWork.time,
          totalRest: 0, 
          totalWork: 0,
          dateTime:dateTime
        });
      });
      
    });
  };
  
      

/*      $scope.dataProcessed = dates.map(function (date) {




      
      var restStart = _.where(dayRecords,{action: 'start-rest'});
      var restStart = _.where(dayRecords,{action: 'start-rest'});
      var restEnd = _.where(dayRecords,{action: 'end-rest'});
      var totalRest = computeTotalRest(restStart,restEnd);
      var totalWork = computeTotalWork(startWork,leaveWork);


      });*/

});