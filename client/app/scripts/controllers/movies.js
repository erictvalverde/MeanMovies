'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('meanMovies')
	.controller('MoviesCtrl', ['$scope' , 'Movie' , function ($scope, Movie) {
	    $scope.movies = Movie.getList().$object;
	  }]);