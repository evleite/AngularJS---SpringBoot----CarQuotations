'use strict';

describe('Service: WeatherFactory', function () {

  // load the service's module
  beforeEach(module('carQuotationsApp'));

  // instantiate service
  var WeatherFactory;
  beforeEach(inject(function (_WeatherFactory_) {
    WeatherFactory = _WeatherFactory_;
  }));

  it('should do something', function () {
    expect(!!WeatherFactory).toBe(true);
  });

});
