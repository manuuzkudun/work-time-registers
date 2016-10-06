var myData = angular.module("data");

myData.controller('DataController', function ($scope, $http, registersFactory, dataFactory,$rootScope, Flash) {
  
  $scope.user = null;
  $scope.registers = null;
  $scope.registersProcessed = null;
  $scope.sortByDate = registersFactory.sortByDate;
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
      var message = 'You are logged as <strong>' + response.data.name + '</strong>';
      var id = Flash.create('success', message, 3000, true);
      
    }, function (error) {
      var message = 'Unable to load customer data';
      var id = Flash.create('error', message, 3000, true);
    });
});