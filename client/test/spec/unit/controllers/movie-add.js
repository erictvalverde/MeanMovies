'use strict';

describe('Controller: MovieAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieAddCtrl = $controller('MovieAddCtrl', {
      $scope: scope
    });
  }));

});
