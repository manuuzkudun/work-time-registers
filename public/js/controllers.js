var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope, $http) {
  
  
  $scope.data = null;
  
   $scope.dataProcessed = null;
  
  $http.get('http://localhost:3000/api/time-reg/list').success(function (data) {
    $scope.names = getProps(data,'Name');
  });
  
  
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
        var data = response.data;
        $scope.data = data;
        
        var dates = getProps(response.data,'Date');        
        
        $scope.dataProcessed = dates.map(function(date){
          
          var startWork = data.filter(function(record){
            return (record.Date == date && record.Action == 'start' );
          })[0].Time;
          
          var leaveWork = data.filter(function(record){
            return (record.Date == date && record.Action == 'leave' );
          })[0].Time;
          
          var totalWork = new Date(startWork) - new Date(leaveWork) ;
          
          return ({Date: date, startWork: startWork, endWork: leaveWork, totalWork: totalWork});
        });
        
      }, function(resonse){
        console.log('Error');
      });


  }
  
 
  
  

  

});