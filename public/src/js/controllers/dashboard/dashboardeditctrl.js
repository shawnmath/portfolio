"use strict";

angular.module("portfolio")
	.controller("DashboardEditCtrl", [
		"$scope", 
		"$stateParams",
		"$location",
		"GetWorkItem", 
		function($scope, $stateParams, $location, GetWorkItem){

			// Get Work Item
			GetWorkItem.get({id: $stateParams.id}, function(workItem){		
				$scope.workItem = workItem;							
			});

			// Update Work Item
			$scope.save = function(){
				GetWorkItem.update($scope.workItem, function(){
					$location.path("/dashboard");
				});				
			};

	}]);