'use strict';

describe('Controller: MovieViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieViewCtrl = $controller('MovieViewCtrl', {
      $scope: scope
    });
  }));

});
