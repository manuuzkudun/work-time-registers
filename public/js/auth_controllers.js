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
      var id = res.data.userId;
      $location.path("/data/" + id);
    })
    .catch(function(response){
    });
  }
});

auth.controller("LogoutController", function ($scope, $auth, $location) {
  function logout() {
    $auth.logout()
      .then(function() {
        $location.path("/")
      }); 
  }
  logout();
});





