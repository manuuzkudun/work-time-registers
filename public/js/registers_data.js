var registersData = angular.module("registersData", []);
registersData.controller('RegistersController', function ($scope, $http) {
  $scope.data = null;
  $scope.dataProcessed = null;
  getEmployees();
  $scope.sortByDate = function (register) {
    var date = new Date(register.dateTime);
    return date;
  };

  function getEmployees() {
    $http.get('http://localhost:3000/api/employees/names').success(function (data) {
      $scope.employees = data;
    });
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
        var dayRegisters = getDayRegisters(date, data.registers);
        var startWork = getStartWork(dayRegisters);
        var leaveWork = getLeaveWork(dayRegisters);
        var restStart = getRestStart(dayRegisters);
        var restEnd = getRestEnd(dayRegisters);
        var dateTime = dayRegisters[0].dateTime;
        var totalRest = computeTotalRest(restStart, restEnd);
        var totalWork = computeTotalWork(startWork, leaveWork);
        return ({
          date: date
          , startWork: startWork.time
          , endWork: leaveWork.time
          , totalRest: totalRest
          , totalWork: totalWork
          , dateTime: dateTime
        });
      });
    });
  };
});