'use strict';

/**
 * @ngdoc function
 * @name carQuotationsApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the carQuotationsApp
 */
angular.module('carQuotationsApp')
  .controller('UsersCtrl', function ($scope, UsersFactory) {

    $scope.a = UsersFactory.query();

    $scope.user = {};

    $scope.reset = function() {
      $scope.user = {};
    }

    $scope.edit = function(user) {
      $scope.user = user;
    }

    $scope.delete = function(user) {
      user.$delete();
    }

    $scope.save = function() {
      user.$save();
      $scope.user = {};
    }
  });
