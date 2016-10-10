var auth = angular.module("auth",[]);

auth.controller("SignUpController", function ($scope, $auth, $location, Flash) {  
  $scope.signup = function() {
    $auth.signup({
      email:  $scope.email,
      password: $scope.password
    })
    .then(function() {
      var id = Flash.create('success', 'You logged-in successfully', 3000, true);
      $location.path("/data");
    })
    .catch(function(response) {
      $location.path("/");
    });
  }
});

auth.controller("LoginController", function ($scope, $auth, $location, Flash) {
  $scope.login = function(){
    $auth.login({
      email: $scope.email,
      password: $scope.password
    })
    .then(function(res){
      var id = Flash.create('success', 'You logged-in successfully', 3000, true);
      $location.path("/data");
    })
    .catch(function(response){
      $location.path("/");
    });
  }
});

auth.controller("NavBarController", function ($scope, $auth, $location, Flash) {
  
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
  
  $scope.logout = function () {
    $auth.logout()
      .then(function() {
        var id = Flash.create('info', 'You logged-out successfully', 3000, true);
        $location.path("/")
      }); 
  };
});





