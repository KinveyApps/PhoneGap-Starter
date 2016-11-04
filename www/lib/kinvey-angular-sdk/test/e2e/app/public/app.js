'use strict';

// window.name = 'NG_DEFER_BOOTSTRAP!';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'kinvey',
  'ui.router',
  'myApp.login'
]);

app.config([
  '$kinveyProvider',
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  function($kinveyProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
    // Init Kinvey
    $kinveyProvider.init({
      appKey: 'kid_HkTD2CJc',
      appSecret: 'cd7f658ed0a548dd8dfadf5a1787568b'
    });

    // App States
    $stateProvider
      .state('logout', {
        url: '/logout',
        controller: ['$kinvey', function($kinvey) {
          const user = $kinvey.User.getActiveUser();

          if (user) {
            return user.logout();
          }

          return null;
        }]
      });

    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise('/login');
  }
]);
