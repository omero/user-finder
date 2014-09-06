"use strict";angular.module("angularAppApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/user-finder",{templateUrl:"views/user-finder.html",controller:"UserFinderCtrl"}).when("/user/:uid",{templateUrl:"views/user.html",controller:"UserDetailCtrl"}).when("/page/add",{templateUrl:"views/page-add.html",controller:"PageAddCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularAppApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularAppApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularAppApp").controller("UserFinderCtrl",["$scope","$http",function(a,b){b.get("http://headlessd7-pocketlab.rhcloud.com/api/user-finder").success(function(b){a.users=b})}]).filter("orderObjectBy",function(){return function(a){if(!angular.isObject(a))return a;var b=[];for(var c in a)b.push(a[c]);return b.sort(function(a,b){return a.name<b.name?-1:a.name>b.name?1:0}),b}}).controller("UserDetailCtrl",["$scope","$http","$routeParams",function(a,b,c){var d="http://headlessd7-pocketlab.rhcloud.com/api/user/"+c.uid;b.get(d).success(function(b){a.user=b})}]),angular.module("angularAppApp").controller("PageAddCtrl",["$scope","$http","$window",function(a,b){var c={type:"page",title:"mi request",body:["dsadsadsadsa"]};a.submitForm=function(){b({url:"http://d7.demo.pocketlab.mx/demo/node",method:"POST",headers:{"Content-Type":"application/json"},data:c})}}]);