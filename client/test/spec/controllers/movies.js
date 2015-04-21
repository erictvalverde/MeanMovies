'use strict';

describe('Controller: MoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('meanMovies'));

  var MoviesCtrl,
    scope,
    httpBackend,
    Movie;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _Movie_) {
    httpBackend = _$httpBackend_;
    Movie = _Movie_;
    scope       = $rootScope.$new();
    MoviesCtrl  = $controller('MoviesCtrl', {
      $scope: scope
    });
  }));

  it('should define Movies', function () {
    expect(scope.movies).toBeDefined();
  });

  it('should show movies length as 0', function () {
    expect(scope.movies.length).toBe(0);
  });

  it('should get a list of movies from api', function(){

     httpBackend.whenGET('http://localhost:3000/movie').respond([
          {
            '_id': '552d6c6dc949af7c03b4b185',
            'title': 'Jupiter Ascending!',
            'url': 'https://www.youtube.com/v/i1hW3bWIuDA',
            '__v': 0,
            'comments': [
                {
                    'user': 'Tarsila',
                    'content': 'Awesome movie',
                    '_id': '552d6ca2c949af7c03b4b186'
                },
                {
                    'user': 'Eric',
                    'content': 'Not so good',
                    '_id': '552d6ccbc949af7c03b4b187'
                },
                {
                    'user': 'Pixel',
                    'content': 'Au au',
                    '_id': '552d6ce8c949af7c03b4b188'
                }
            ],
            'ratings': [
                4,
                2,
                5
            ]
        }
     ]);

     scope.movies = Movie.getList().$object;
     httpBackend.flush();
     expect(scope.movies.length).not.toBe(0);
  });

});
