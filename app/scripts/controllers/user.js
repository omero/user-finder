'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('UserFinderCtrl', function ($scope, $http) {
    $http.get('http://d7.demo.pocketlab.mx/demo/user').
    success(function(data){
      $scope.users = data;
    });
  })


  .filter('orderObjectBy', function(){
    return function(input, attribute) {
      if (!angular.isObject(input)) return input;
      var array = [];
      for(var objectKey in input) {
        array.push(input[objectKey]);
      }
      array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
      });
      return array;
    }
  })

  .controller('UserDetailCtrl', function ($scope, $http, $routeParams) {
    var uriUser = 'http://d7.demo.pocketlab.mx/demo/user/'+$routeParams.uid;
    $http.get(uriUser).
    success(function(data){
      $scope.user = data;
    });
  });
