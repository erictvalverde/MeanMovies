'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('meanMovies')
	.controller('MovieViewCtrl', function ($scope, $routeParams, Movie) {
		
		$scope.viewMovie = true;
		$scope.movie ={};

		Movie.one($routeParams.id).get().then(function(movieData){

			$scope.movie = movieData;

			$scope.ratingsAverage = function(){

				var total = 0;
				var arr = $scope.movie.ratings;
				var lgt = $scope.movie.ratings.length;

				for (var i = 0; i < arr.length; i++) {
					total += arr[i];
				}

				return Math.round(total / lgt);
			};

		});
		
		$scope.saveRating = function() {
			if($scope.rating !== null && $scope.rating !== undefined){
				$scope.movie.ratings.push(parseInt($scope.rating));
				$scope.movie.save().then(function() {
					$('#rating').attr('disabled','true');
				});
			}
		};

		$scope.saveComment = function() {
			$scope.movie.comments.push($scope.comment);
			$scope.movie.save().then(function() {
				$scope.comment = '';
			});

		};
	});
