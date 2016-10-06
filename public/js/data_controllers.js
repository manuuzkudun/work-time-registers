var myData = angular.module("data");

myData.controller('DataController', function ($scope, $http, registersFactory, dataFactory,$rootScope, Flash) {
  
  $rootScope.user = null;
  $scope.registers = null;
  $scope.registersProcessed = null;
  $scope.weekSummary = null;
  $scope.modal = {
    title: 'Modal Title',
    content: 'Modal content',
    placement: 'center'
  };
  
  dataFactory.getAuthorizedData()
    .then( function(response) { 
      $scope.registers = response.data.registers;  
      $rootScope.user = {
        name: response.data.name,
        email: response.data.email,
        admin: response.data.admin
      };
      $scope.registersProcessed = registersFactory.processData($scope.registers);
      $scope.weekData = registersFactory.weekSummary($scope.registersProcessed);
    
      var message = 'You are logged as <strong>' + $rootScope.user.name + '</strong>';
      var id = Flash.create('success', message, 3000, true);
      
    }, function (error) {
      var message = 'Unable to load customer data';
      var id = Flash.create('error', message, 3000, true);
    });
});