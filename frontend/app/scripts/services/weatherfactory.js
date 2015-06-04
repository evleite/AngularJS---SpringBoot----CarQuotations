'use strict';

/**
 * @ngdoc service
 * @name carQuotationsApp.WeatherFactory
 * @description
 * # WeatherFactory
 * Factory in the carQuotationsApp.
 */
angular.module('carQuotationsApp')
  .factory('WeatherFactory', function ($resource, $log) {
    return $resource("http://api.openweathermap.org/data/2.5/weather?q=Luxembourg,lu", {}, {
      'get': {
        method: 'GET',
        transformResponse: function (data) {
          data = angular.fromJson(data);
          return data;
        }
      }
    });
  });
