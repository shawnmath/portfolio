"use strict";

angular.module("portfolio")
	.controller("DashboardDeleteCtrl", [
		"$scope", 
		"$stateParams",
		"$location",
		"GetWorkItem", 
		function($scope, $stateParams, $location, GetWorkItem){

			// Get Work Item
			GetWorkItem.get({title: $stateParams.id}, function(workItem){		
				$scope.workItem = workItem;							
			});

			// Update Work Item			
			$scope.delete = function(){
				GetWorkItem.remove({title: $stateParams.id}, function(){
					$location.path("/dashboard");
				});				
			};

	}]);