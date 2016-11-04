'use strict';

angular.module('starter.menu', [
  'ui.router',
  'kinvey'
])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('app', {
    cache: false,
    url: '/app',
    abstract: true,
    templateUrl: 'js/menu/menu.html',
    controller: 'AppCtrl'
  });
}])
.controller('AppCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
});
