angular.module("OnTask")
.controller("home",function($route,$scope,$firebaseObject,$location,$firebaseArray){
//  var authData = firebase.database().ref.getAuth();
//  function setUserRef(uid){
 //    $scope.userRef = ref.child("users").child(uid);
 //    $scope.authenticated = true;
 //    $scope.keywords = $firebaseArray($scope.userRef.child("keywords"));
 //  }
 // if (authData) {
 //   console.log("Authenticated");
 //    setUserRef(authData.uid);
 //  }

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
