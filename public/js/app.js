var myApp = angular.module("myApp", ["ngRoute", "data","satellizer","auth","ngFlash","ui.gravatar"]);

myApp.config(function ($routeProvider, $authProvider,$locationProvider) {
   
  $authProvider.loginUrl = "/auth/login";
  $authProvider.signupUrl = "/auth/signup";
  $authProvider.tokenName = "token";
  $authProvider.tokenPrefix = "myApp"
  
  //$locationProvider.html5Mode(true);
  
  $routeProvider.when("/home", {
    templateUrl: "/views/home.html",
    
  }).when("/data", {
    templateUrl: "/views/data.html"
  }).when("/login", {
    templateUrl: "/views/login.html",
    controller: "LoginController"
  }).when("/signup", {
    templateUrl: "/views/signup.html",
    controller: "SignUpController"
  }).otherwise({
    redirectTo: '/home'
  });

  
});
