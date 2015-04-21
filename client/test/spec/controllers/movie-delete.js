'use strict';

describe('Controller: MovieDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieDeleteCtrl = $controller('MovieDeleteCtrl', {
      $scope: scope
    });
  }));

});
