var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope, $http) {
  
  function getProps(data,prop) {    
    var props = data.map(function (obj) {
      return obj[prop];
    }); 
    props = props.filter(function (v, i) {
      return props.indexOf(v) == i;
    });
    return props;
  }

  $scope.getEmployeeData = function (){
    
    var req = {
      method: 'POST',
      url: 'http://localhost:3000/api/time-reg',
      headers: {
        'Content-Type': 'application/json' 
      },
      data: { name: $scope.reqEmployee }
      };
    
      $http(req).then(function(response){
        $scope.data = response.data;
      }, function(resonse){
        console.log('Error');
      });

    
    
    //$http.get('http://localhost:3000/api/time-reg/2').success(function (data) {
    //  $scope.data = data;
//  });
  }
  
 
  
  
  $http.get('http://localhost:3000/api/time-reg/list').success(function (data) {
    $scope.data = data;
    $scope.names = getProps(data,'Name');
  });
  

});