'use strict';

/**
 * @ngdoc service
 * @name carQuotationsApp.UsersService
 * @description
 * # UsersService
 * Service in the carQuotationsApp.
 */
angular.module('carQuotationsApp')
  .service('UsersFactory', function ($resource) {
    return $resource("http://localhost:8383/api/users/:username", {username:'@username'});
  });
