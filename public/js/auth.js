var auth = angular.module("auth",[]);

auth.controller("SignUpController", function ($auth, $location) {  
  var vm = this;
  this.signup = function() {
    $auth.signup({
      email: vm.email,
      password: vm.password
    })
    .then(function() {
      // If register was succesful
      // We redirect the user to a private url
      $location.path("/private");
    })
    .catch(function(response) {
      // Call this function if there are errors
    });
  }
});

auth.controller("LoginController", function ($auth, $location) {  
  var vm = this;
  this.login = function(){
    $auth.login({
      email: vm.email,
      password: vm.password
    })
    .then(function(){
      // If register was succesful
      // We redirect the user to a private url
      $location.path("/private")
    })
    .catch(function(response){
      // Call this function if there are errors
    });
  }
});


auth.controller("LogoutController", function ($auth, $location) {  
  $auth.logout()
    .then(function() {
      // Disconnect the user and redirect it
       $location.path("/")
    });
});





