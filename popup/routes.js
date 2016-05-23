angular.module("OnTask")
.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when("/",{
    templateUrl: "popup/app.html",
    controller: "home"
  })
  .when("/login",{
    templateUrl: "popup/login.html",
    controller: "login"
  });
});
