angular.module("OnTask")
.controller("login",function($route,$location,$scope,$mdToast,$mdDialog,$firebaseObject){
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
$scope.login = function(form) {
  if (form.$valid) {
    ref.authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, authData) {
      if(error) {
        $scope.showActionToast(error.toString());
      } else {
        setUserRef(authData.uid);
        $scope.$apply();
      }
    });
  }
};
});
