'use strict';

describe('Controller: MoviesCtrl', function () {

 // load the controller's module
  beforeEach(module('meanMovies'));

  var MovieAddCtrl,
    scope,
    httpBackend,
    Movie,
    location,
    response = {"__v":0,"title":"New Movie","url":"NewURL.com","_id":"553956e9b63464e80166a52f","comments":[],"ratings":[]};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$location_, _Movie_) {
    httpBackend   = _$httpBackend_;
    Movie         = _Movie_;
    location      = _$location_;
    scope         = $rootScope.$new();
    MovieAddCtrl  = $controller('MovieAddCtrl', {
      $scope: scope
    });
  }));


  it('should have a addMovie controller', function() {
    expect(MovieAddCtrl).toBeDefined();
  });

  it('should contain an empty movie obj in scope at start', function() {
    expect(scope.movie).toEqual({});
  });

  it('should add a new movie', function() {

    spyOn(location, 'path');

    httpBackend.whenPOST('http://localhost:3000/movie').respond('success');
   
    expect(location.path).toHaveBeenCalledWith('/movies');
  });


});
