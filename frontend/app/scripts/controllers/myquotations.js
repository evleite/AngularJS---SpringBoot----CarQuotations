'use strict';

/**
 * @ngdoc function
 * @name carQuotationsApp.controller:MyquotationsCtrl
 * @description
 * # MyquotationsCtrl
 * Controller of the carQuotationsApp
 */
angular.module('carQuotationsApp')
  .controller('MyquotationsCtrl', function ($scope, $rootScope, QuotationsService) {
    $scope.myQuotations = QuotationsService.myQuotations({username: $rootScope.username});
  });
