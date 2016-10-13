'use strict';

angular.module('BikeShare', ['ui.router','ui.bootstrap'])
  .run(function($rootScope) {
    $rootScope.appName = 'BikeShare';
  });
