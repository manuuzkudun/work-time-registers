var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope, $http) {
  
  $http.get('http://localhost:3000/api/list').success(function (data) {
    $scope.data = data;
  });
  
});