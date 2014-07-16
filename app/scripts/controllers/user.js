'use strict';

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
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
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
