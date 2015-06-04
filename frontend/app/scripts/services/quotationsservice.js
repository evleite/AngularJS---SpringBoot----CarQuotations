'use strict';

/**
 * @ngdoc service
 * @name carQuotationsApp.QuotationsService
 * @description
 * # QuotationsService
 * Service in the carQuotationsApp.
 */
angular.module('carQuotationsApp')
  .service('QuotationsService', function ($resource) {
    return $resource(
      "http://localhost:8383/api/quotationRequests/:id",
      {id: "@id"},
      { myQuotations: { method: 'GET', url: 'http://localhost:8383/api/quotationRequests/findByUser/:username', isArray: true, params: { username: '@username'}}}
    );
  });
