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
          email: data.email,
          admin: data.admin
        };
        // Flash alert
        var message = 'You are logged as <strong>' + data.name + '</strong>';
        var id = Flash.create('success', message, 3000, true);
      
        $scope.registersProcessed = processData(data.registers);
        $scope.modal = {
            title: 'Modal Title',
            content: 'Modal content',
          placement: 'center'
        };
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



});