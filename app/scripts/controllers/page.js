'use strict';

angular.module('angularAppApp')
  .controller('PageAddCtrl', function ($scope, $http, $window) {

    var data = {
      "type" : "page",
      "title" : "mi request",
      "body" : ["dsadsadsadsa"],
    };
    $scope.submitForm = function() {
      $http({
        url:'http://d7.demo.pocketlab.mx/demo/node',
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      })
    };
  })
