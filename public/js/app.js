var myApp = angular.module("myApp", ["ngRoute", "timeData","satellizer"]);

myApp.config(function ($routeProvider, $authProvider) {
  
  $authProvider.loginUrl = "http://localhost:3000/auth/login";
  $authProvider.signupUrl = "http://localhost:3000/auth/signup";
  $authProvider.tokenName = "token";
  $authProvider.tokenPrefix = "myApp"
  
  $routeProvider.when("/home", {
    templateUrl: "./partials/content/_home.html"
  }).when("/data", {
    templateUrl: "./partials/content/_data.html"
  }).otherwise({
    redirectTo: '/home'
  });
  
});
