'use strict';

angular.module('starter.books', [
  'ui.router',
  'kinvey'
])
.config(function($stateProvider) {
  $stateProvider.state('app.books', {
    cache: false,
    url: '/books',
    requiresActiveUser: true,
    views: {
      'menuContent': {
        controller: 'BooksCtrl',
        templateUrl: 'js/books/books.html'
      }
    }
  });
})
.controller('BooksCtrl', function($scope, $kinvey) {
  $scope.books = [];

  $scope.find = function() {
    var store = $kinvey.DataStore.collection('books');
    store.find()
      .subscribe(function(books) {
        $scope.books = books;
        $scope.$digest();
      }, function(error) {
        console.log(error);
      });
  }

  $scope.$on('$ionicView.enter', function() {
    // $scope.find();
  });
});
