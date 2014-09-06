'use strict';

angular.module('angularAppApp')
  .controller('UserFinderCtrl', function ($scope, $http) {
    $http.get('http://headlessd7-pocketlab.rhcloud.com/api/user-finder').
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
    var uriUser = 'http://headlessd7-pocketlab.rhcloud.com/api/user/'+$routeParams.uid;
    $http.get(uriUser).
    success(function(data){
      $scope.user = data;
    });
  });
