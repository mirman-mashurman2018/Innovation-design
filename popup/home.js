angular.module("OnTask")
.controller("home",function($route,$scope,$firebaseObject,$location,$firebaseArray){
  var ref = new Firebase("https://antiprocrastination.firebaseio.com");
  var authData = ref.getAuth();
  if (authData) {
    console.log("Authenticated");
    setUserRef(authData.uid);
  }
  function setUserRef(uid){
    $scope.userRef = ref.child("users").child(uid);
    $scope.authenticated = true;
    $scope.keywords = $firebaseArray($scope.userRef.child("keywords"));
  }
  $scope.login =function()
  {
    ref.unauth();
    $scope.authenticated = false;
$location.path("/login")


  }
});
