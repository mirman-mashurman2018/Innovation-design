angular.module("OnTask")
.controller("login",function($route,$location,$scope,$firebaseObject,$firebaseArray){

//  var authData = ref.getAuth();
//  if (authData) {
//    console.log("Authenticated");
//    setUserRef(authData.uid);
//    $location.path("/");
//  }
  $scope.login=true;
  function setUserRef(uid){
    $scope.userRef = ref.child("users").child(uid);
    $scope.authenticated = true;
    $scope.subjects = $firebaseArray($scope.userRef.child("subjects"));
    $scope.keywords = $firebaseArray($scope.userRef.child("keywords"));

  }
$scope.togglelogin=function()
{
if($scope.login)
{

$scope.login=false;

}
else {
  $scope.login=true;
}
};
$scope.login = function(form) {
  if (form.$valid) {

    firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           // [START_EXCLUDE]
           if (errorCode === 'auth/wrong-password') {
             console.log('Wrong password.');
           } else {
             console.log(errorMessage);
           }
  $location.path("/");
});
}
};
$scope.createUser = function(user) {
  firebase.auth().createUserWithEmailAndPassword(user.email,user.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode == 'auth/weak-password') {
    console.log('The password is too weak.');
  } else {
    console.log(errorMessage);
  }
  console.log(error);
  // [END_EXCLUDE]
});
};


$scope.signup = function(form) {
  if(form.$valid) {
    if($scope.user.password === $scope.user.confirm) {
      $scope.createUser($scope.user);
      // $scope.showActionToast("Creating!");
    } else {
      console.log("Password and confirm don't match!");
    }
  }
};
}
);
