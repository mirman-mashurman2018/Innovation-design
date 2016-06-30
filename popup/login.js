angular.module("OnTask")
.controller("login",function($route,$location,$scope,$firebaseObject,$firebaseArray){
  var ref = new Firebase("https://antiprocrastination.firebaseio.com");
  var authData = ref.getAuth();
  if (authData) {
    console.log("Authenticated");
    setUserRef(authData.uid);
    $location.path("/");
  }
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
    ref.authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, authData) {
      if(error) {
        console.log(error.toString());
      } else {
        setUserRef(authData.uid);
        $scope.$apply();
      }
    });
  $location.path("/");
}
};
$scope.createUser = function(user) {
  ref.createUser(user, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
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
});
