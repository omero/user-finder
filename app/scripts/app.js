'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user-finder', {
        templateUrl: 'views/user-finder.html',
        controller: 'UserFinderCtrl'
      })
      .when('/user/:uid', {
        templateUrl: 'views/user.html',
        controller: 'UserDetailCtrl'
      })
      .when('/page/add', {
        templateUrl: 'views/page-add.html',
        controller: 'PageAddCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
