angular.module("OnTask")
.controller("home",function($route,$scope,$firebaseObject,$location,$firebaseArray){
//  var authData = ref.getAuth();
//  if (authData) {
//    console.log("Authenticated");
//    setUserRef(authData.uid);
//  }
  function setUserRef(uid){
    $scope.userRef = ref.child("users").child(uid);
    $scope.authenticated = true;
    $scope.keywords = $firebaseArray($scope.userRef.child("keywords"));
  }
  $scope.togglelogin =function()
  {
    if (firebase.auth().currentUser) {
     // [START signout]
     firebase.auth().signOut();
     // [END signout]
   }
    $scope.authenticated = false;
$location.path("/login")


  }
  $scope.newKeyword = function()
  {
$scope.keywords.$add({word: ""});
  }
  $scope.deleteKeyword =function(keyword)
  {
    $scope.keywords.$remove(keyword);
  }

});
