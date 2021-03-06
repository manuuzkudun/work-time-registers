angular.module('data').factory('dataFactory', ['$http', function ($http) {

  var urlBase = '/api/employee';
  var dataFactory = {};

  dataFactory.getAllEmployeesData = function () {
    return $http.get(urlBase);
  };

  dataFactory.getEmployeeData = function (id) {
    return $http.get(urlBase + '/' + id);
  };

  dataFactory.getAuthorizedData = function () {
    return $http.get('/api/employee');
  };

  dataFactory.updateRegisters = function (data) {
    var requestData = {
      data: data.map(function(register) {
        return {
          id: register.id,
          action: register.action
        }
      })
    };
    return $http.put('/api/employee',requestData);
  };


  dataFactory.updateEmployee = function (cust) {
    return $http.put(urlBase + '/' + cust.ID, cust)
  };



  dataFactory.getEmployeeNames = function(){
    return $http.get('http://localhost:3000/api/employees/names');
  }

  return dataFactory;
}]);
