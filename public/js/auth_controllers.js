var auth = angular.module("auth",[]);

auth.controller("SignUpController", function ($scope, $auth, $location) {  
  $scope.signup = function() {
    $auth.signup({
      email:  $scope.email,
      password: $scope.password
    })
    .then(function() {
      $location.path("/data");
    })
    .catch(function(response) {
      $location.path("/");
    });
  }
});

auth.controller("LoginController", function ($scope, $auth, $location) {
  $scope.login = function(){
    $auth.login({
      email: $scope.email,
      password: $scope.password
    })
    .then(function(res){
      $location.path("/data");
    })
    .catch(function(response){
      $location.path("/");
    });
  }
});

auth.controller("NavBarController", function ($scope, $auth, $location) {
  
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
  
  $scope.logout = function () {
    $auth.logout()
      .then(function() {
        $location.path("/")
      }); 
  };
});





