"use strict";

angular.module("portfolio")
	.controller("WorkCtrl", [
		"$scope", 
		"$stateParams",
		"GetWorkItem", 
		function($scope, $stateParams, GetWorkItem){

			GetWorkItem.get({id: $stateParams.id}, function(work){		
				$scope.work = work;
			});

	}]);