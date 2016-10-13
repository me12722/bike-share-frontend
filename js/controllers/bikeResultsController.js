'use strict';
angular.module('BikeShare').controller('BikeResultsController', function($scope, $http, $stateParams, $state) {
  $scope.filters = {};
  $scope.date = $stateParams.date || new Date();
  $scope.query = $stateParams.query;
  $scope.query_hour = $stateParams.query_hour || '8';
});
