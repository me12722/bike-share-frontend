'use strict';

angular.module('BikeShare').config(function ($stateProvider, $ urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('default', {
      url : '/',
      templateUrl: 'views.home.html'
    });
});
