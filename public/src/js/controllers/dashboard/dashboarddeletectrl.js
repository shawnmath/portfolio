"use strict";

angular.module("portfolio")
	.controller("DashboardDeleteCtrl", [
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
			$scope.delete = function(){
				GetWorkItem.remove({id: $stateParams.id}, function(){
					$location.path("/dashboard");
				});				
			};

	}]);