"use strict";

angular.module("portfolio")
	.controller("WorkCtrl", [
		"$scope", 
		"$stateParams",
		"GetWorkItem", 
		function($scope, $stateParams, GetWorkItem){

			GetWorkItem.get({title: $stateParams.id}, function(work){		
				$scope.work = work;
			});

	}]);