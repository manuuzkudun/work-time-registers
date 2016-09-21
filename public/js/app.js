var myApp = angular.module("myApp", ["ngRoute", "registersData","satellizer"]);

myApp.config(function ($routeProvider, $authProvider) {
  
  $authProvider.loginUrl = "http://localhost:3000/auth/login";
  $authProvider.signupUrl = "http://localhost:3000/auth/signup";
  $authProvider.tokenName = "token";
  $authProvider.tokenPrefix = "myApp"
  
  $routeProvider.when("/home", {
    templateUrl: "./partials/content/_home.html",
    
  }).when("/data", {
    templateUrl: "./partials/content/_data.html",
    controller: "RegistersController"
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
