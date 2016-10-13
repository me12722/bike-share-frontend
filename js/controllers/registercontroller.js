'use strict';

angular.module('BikeShare').controller('RegisterController', ['$scope', '$uibModal', '$state', '$http', '$rootScope', function($scope, $uibModal, $rootScope, $http) {
  function checkPasswordsMatch() {
    if($scope.password != $scope.confirmPassword){
      document.getElementById('password').setCustomValidity('Passwords must match.');
    } else {
      document.getElementById('password').setCustomValidity('');
    }
  }

  $scope.register = function() {
    checkPasswordsMatch();
    if(!$('#frm-register')[0].checkValidity()) {
      return;
    }
    var payload = {
      'username' : $scope.username,
      'password' : $scope.password,
      'email' : $scope.email
    };

    $http({
      mathod: 'Post',
      url : 'localHost/api/v1/accounts',
      data: $.param(payload),
    }).then(onRegistration, onRegistrationError);
  };

  function onRegistrationError() {
    console.log("This was expected");
    console.log(data);
  }

  function onRegistration() {
    Authentication.authenticateWithEmail($scope.email, $scope.password, onLogin);
  }

}]);
