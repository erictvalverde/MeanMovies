'use strict';

describe('Controller: MovieEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieEditCtrl = $controller('MovieEditCtrl', {
      $scope: scope
    });
  }));


});
