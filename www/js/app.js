// Ionic Starter App
angular.module('starter', [
  'ionic',
  'kinvey',
  'starter.books',
  'starter.menu',
  'starter.profile'
])
.config(function($kinveyProvider, $stateProvider, $urlRouterProvider) {
  // Initialize Kinvey
  $kinveyProvider.init({
    appKey: '',
    appSecret: ''
  });

  // Logout state
  $stateProvider.state({
    name: 'logout',
    url: '/logout',
    controller: ['$kinvey', '$state', function($kinvey, $state) {
      $kinvey.User.logout()
        .then(function() {
          $state.go('app.books');
        });
    }]
  });

  // If none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/books');
})
.run(function($rootScope, $kinvey, $state, $ionicPlatform, $ionicModal) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // Show login modal if an active user does not exist and the toState
  // requires an active user
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    if (toState.requiresActiveUser === true && !$kinvey.User.getActiveUser()) {
      // Prevent the state change
      event.preventDefault();

      // Create a $scope for the login modal
      var $scope = $rootScope.$new();
      $scope.loginData = {};

      // Create the login modal that we will use later
      $scope.modalPromise = $ionicModal.fromTemplateUrl('js/login/login.html', {
        scope: $scope,
        backdropClickToClose: false,
        hardwareBackButtonClose: false
      });

      // Open the login modal
      $scope.login = function() {
        $scope.modalPromise = $scope.modalPromise
          .then(function(modal) {
            modal.show();
            return modal;
          });
      };

      // Close the login modal
      $scope.closeLogin = function() {
        $scope.modalPromise = $scope.modalPromise
          .then(function(modal) {
            modal.hide();
            return modal;
          });
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        $scope.showError = false;

        $kinvey.User.login($scope.loginData)
          .then(function() {
            $scope.closeLogin();
            $state.go(toState.name, toParams);
          })
          .catch(function(error) {
            $scope.error = error;
            $scope.showError = true;
          });
      };

      // Show the login modal
      $scope.login();
    }
  });
});
