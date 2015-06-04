'use strict';

/**
 * @ngdoc function
 * @name carQuotationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carQuotationsApp
 */
angular.module('carQuotationsApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, QuotationsService, WeatherFactory) {
    $rootScope.username = 'hmichopoulos';
    $scope.weather = WeatherFactory.get();
    $scope.quotations = QuotationsService.query();
  });
