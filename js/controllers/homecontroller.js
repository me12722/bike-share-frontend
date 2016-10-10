'use strict';
angular.module('BikeShare').controller('HomeController', ['$scope', '$state', function($scope, $state){
  $scope.query_hour = '10';
  $scope.date = new Date();
  $scope.am_pm = 'Pm';
  $scope.num_people = '1';
  $scope.DateOptions = {
      showWeeks : false,
      startingDate: 1
  };

  $scope.search = function() {
    $state.go('search', {'query': $scope.query, 'date': $scope.date, num_people: $scope.num_people, query_hour: $scope.query_hour, 'am_pm': $scope.am_pm});
  };
}]);
