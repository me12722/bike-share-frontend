'use strict';

angular.module('BikeShare').controller('NavController', ['$scope', '$state', function($scope, $state){
  $scope.showBikes = function() {
    $state.go('bikes');
  };
}]);
