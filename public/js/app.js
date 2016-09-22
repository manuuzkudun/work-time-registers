var myApp = angular.module("myApp", ["ngRoute", "registersData","satellizer","auth"]);

myApp.config(function ($routeProvider, $authProvider) {
  
  $authProvider.loginUrl = "/auth/login";
  $authProvider.signupUrl = "/auth/signup";
  $authProvider.tokenName = "token";
  $authProvider.tokenPrefix = "myApp"
  
  $routeProvider.when("/home", {
    templateUrl: "./partials/content/_home.html",
    
  }).when("/data", {
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
