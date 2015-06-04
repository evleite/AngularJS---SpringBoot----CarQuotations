'use strict';

describe('Service: QuotationsService', function () {

  // load the service's module
  beforeEach(module('carQuotationsApp'));

  // instantiate service
  var QuotationsService;
  beforeEach(inject(function (_QuotationsService_) {
    QuotationsService = _QuotationsService_;
  }));

  it('should do something', function () {
    expect(!!QuotationsService).toBe(true);
  });

});
