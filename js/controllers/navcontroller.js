'use strict';

angular.module('BikeShare').controller('NavController', ['$scope', '$state', '$uibModal',function($scope, $state, $uibModal){
  $scope.showBikes = function() {
    $state.go('bikeResults');
  };

  $scope.showRegister = function () {
    $uibModal.open({
      templateUrl : 'views/register.html',
      controller : 'RegisterController'
    });
  };
}]);
