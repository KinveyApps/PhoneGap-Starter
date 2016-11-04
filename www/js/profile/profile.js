'use strict';

angular.module('starter.profile', [
  'ui.router',
  'kinvey'
])
.config(function($stateProvider) {
  $stateProvider.state('app.profile', {
    cache: false,
    url: '/profile',
    requiresActiveUser: true,
    views: {
      'menuContent': {
        controller: 'ProfileCtrl',
        templateUrl: 'js/profile/profile.html'
      }
    }
  });
})
.controller('ProfileCtrl', function($scope, $kinvey) {
  $scope.user = $kinvey.User.getActiveUser();

  $scope.update = function() {
    $scope.showSuccess = false;
    $scope.showError = false;

    $scope.user.update($scope.user.data)
      .then(function() {
        $scope.showSuccess = true;
        $scope.$digest();
      })
      .catch(function(error) {
        $scope.error = error;
        $scope.showError = true;
        $scope.$digest();
      });
  };
});
