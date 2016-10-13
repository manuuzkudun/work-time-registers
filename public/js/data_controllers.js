var myData = angular.module("data");

myData.controller('DataController', function($scope, $http, registersFactory, dataFactory, $rootScope, Flash) {

	var getDaySummaries = registersFactory.getDaySummaries;
	var getWeekSummaries = registersFactory.getWeekSummaries;

	$rootScope.user = null;
	$scope.registers = null;
	$scope.daySummaries = null;
	$scope.weekSummaries = null;
	$scope.updateData = function(data) {
		this.$hide();
    //TO-DO: REFRACTOR
		dataFactory.updateRegisters(data)
			.then(function(response) {
        $scope.registers = response.data.registers;
        $rootScope.user = {
          name: response.data.name,
          email: response.data.email,
          admin: response.data.admin
        };
        $scope.daySummaries = getDaySummaries($scope.registers);
        $scope.weekSummaries = getWeekSummaries($scope.daySummaries);
				var id = Flash.create('success', 'Data updated successfully', 3000, true);
			})
      .catch(function(error) {
        var id = Flash.create('warning', 'Error in updating data', 3000, true);
      });
	};

	dataFactory.getAuthorizedData()
		.then(function(response) {
			$scope.registers = response.data.registers;
			$rootScope.user = {
				name: response.data.name,
				email: response.data.email,
				admin: response.data.admin
			};
			$scope.daySummaries = getDaySummaries($scope.registers);
			$scope.weekSummaries = getWeekSummaries($scope.daySummaries);
		})
		.catch(function(error) {
			var id = Flash.create('warning', 'Unable to load data', 3000, true);
		});

});
