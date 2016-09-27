var myData = angular.module("data", []);

myData.controller('DataController', function ($scope, $http, dataFactory,$rootScope, Flash) {
  
  var data = null;
  $scope.data = null;
  $scope.dataProcessed = null;
  $scope.registersProcessed = null;
  getDataIfLogged();
  //getEmployees($scope.registers);

  $scope.sortByDate = function (register) {
    var date = new Date(register.dateTime);
    return date;
  };

  $scope.showError = function(register) {
    return register.totalRest == 'no-data' ? 'ERROR' : '';
  };
  
  function getDataIfLogged() {
    dataFactory.getAuthorizedData()
      .then(function(response){
      
        data = response.data;
        $scope.registers = data.registers;
        $rootScope.user = {
          name: data.name,
          email:data.email
        };
      
        var message = 'You are logged as <strong>' + data.name + '</strong>';
        var id = Flash.create('success', message, 3000, {class: 'custom-class', id: 'custom-id'}, true);
      
        $scope.registersProcessed = processData(data.registers);
    }, function (error) {
        $scope.status = 'Unable to load customer data: ' + error.message;
      });
    }
  
  function getEmployees() {
    dataFactory.getEmployeeNames()
      .then(function(res) {
      $scope.employees = res.data;      
    });
  }

  function processData(registers) {
    var dates = getDates(registers);
    return  dates.map(function (date) {
      var dayRegisters = getDayRegisters(date, registers);
      var startWork = getStartWork(dayRegisters);
      var leaveWork = getLeaveWork(dayRegisters);
      var restStart = getRestStart(dayRegisters);
      var restEnd = getRestEnd(dayRegisters);
      var dateTime = dayRegisters[0].dateTime;
      var totalRest = computeTotalRest(restStart, restEnd);
      var totalWork = computeTotalWork(startWork, leaveWork);
      return ({
        date: date,
        startWork: startWork.time,
        endWork: leaveWork.time,
        totalRest: totalRest,
        totalWork: totalWork,
        dateTime: dateTime
      });
    });
 }


});