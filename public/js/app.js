var myApp = angular.module("myApp", ["ngRoute","timeData"]);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "./partials/content/_home.html"
    })
    .when("/data", {
        templateUrl : "./partials/content/_data.html"
    })
    .otherwise({
      redirectTo: '/home'
    });
});