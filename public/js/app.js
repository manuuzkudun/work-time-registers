var myApp = angular.module("myApp", ["ngRoute", "data","satellizer","auth"]);

myApp.config(function ($routeProvider, $authProvider,$locationProvider) {
  
  $authProvider.loginUrl = "/auth/login";
  $authProvider.signupUrl = "/auth/signup";
  $authProvider.tokenName = "token";
  $authProvider.tokenPrefix = "myApp"
  
  //$locationProvider.html5Mode(true);
  
  $routeProvider.when("/home", {
    templateUrl: "./partials/content/_home.html",
    
  }).when("/data/:id", {
    templateUrl: "./partials/content/_data.html"
  }).when("/login", {
    templateUrl: "./partials/content/_login.html",
    controller: "LoginController"
  }).when("/signup", {
    templateUrl: "./partials/content/_signup.html",
    controller: "SignUpController"
  }).when("/logout", {
    templateUrl: null,
    controller: "LogoutController"
  }).otherwise({
    redirectTo: '/home'
  });
  
  
  
});
