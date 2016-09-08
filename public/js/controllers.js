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
  
  
  function timeDifference(dateTime1,dateTime2){
    var diff = new Date(dateTime2) - new Date(dateTime1);
    var seconds = diff/1000;
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    
    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    
    return hours + ":" + minutes + ":" + seconds;
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
          })[0];
          
          var leaveWork = data.filter(function(record){
            return (record.Date == date && record.Action == 'leave' );
          })[0];
          
          
          
       var totalWork= timeDifference(startWork.DateTime,leaveWork.DateTime);
          

                  
          return ({Date: date, startWork:startWork.Time, endWork:  leaveWork.Time, totalWork: totalWork});
        });
        
      }, function(resonse){
        console.log('Error');
      });


  }
  
 
  
  

  

});