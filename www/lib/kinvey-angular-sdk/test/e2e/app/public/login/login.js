'use strict';

var module = angular.module('myApp.login', [
  'ui.router',
  'kinvey'
]);

module.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    });
}]);

module.controller('LoginCtrl', ['$scope', '$kinvey', function($scope, $kinvey) {
  $scope.username = undefined;
  $scope.password = undefined;

  // Login with Kinvey
  $scope.login = function(username, password) {
    return $kinvey.User.login(username, password);
  };

  // Login with MIC
  $scope.loginWithMIC = function() {
    return $kinvey.User.loginWithMIC('http://localhost:3000');
  };
}]);
