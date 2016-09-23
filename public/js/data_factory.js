angular.module('data').factory('dataFactory', ['$http', function ($http) {
  
  var urlBase = '/api/employee';
  var dataFactory = {};
  
  dataFactory.getAllEmployeesData = function () {
    return $http.get(urlBase);
  };
  
  dataFactory.getEmployeeData = function (id) {
    return $http.get(urlBase + '/' + id);
  };
  
/*  dataFactory.insertEmployee = function (cust) {
    return $http.post(urlBase, cust);
  };*/
  
  dataFactory.updateEmployee = function (cust) {
    return $http.put(urlBase + '/' + cust.ID, cust)
  };
  
/*  dataFactory.deleteEmployee = function (id) {
    return $http.delete(urlBase + '/' + id);
  };*/
  
/*  dataFactory.getEmployeeRegisters = function (id) {
    return $http.get(urlBase + '/' + id + '/registers');
  };
  */
  
  return dataFactory;
}]);