'use strict';

angular.module('BikeShare', ['ui.router'])
  .run(function($rootScope) {
    $rootScope.appName = 'BikeShare';
  });
