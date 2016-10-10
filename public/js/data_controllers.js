var myData = angular.module("data");

myData.controller('DataController', function ($scope, $http, registersFactory, dataFactory,$rootScope, Flash) {
  
  $rootScope.user = null;
  $scope.registers = null;
  $scope.daySummaries = null;
  $scope.weekSummaries = null;
  
  dataFactory.getAuthorizedData()
    .then( function(response) { 
      $scope.registers = response.data.registers;  
      $rootScope.user = {
        name: response.data.name,
        email: response.data.email,
        admin: response.data.admin
      };
      $scope.daySummaries = registersFactory.getDaySummaries($scope.registers);
      $scope.weekSummaries = registersFactory.getWeekSummaries($scope.daySummaries);    
    }, function (error) {
      var id = Flash.create('warning', 'Unable to load data', 3000, true);
    });
  
  
  
  
  
  
});