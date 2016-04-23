'use strict';

describe('Component: PlantasComponent', function () {

  // load the controller's module
  beforeEach(module('fishackatonApp'));

  var PlantasComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PlantasComponent = $componentController('PlantasComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
