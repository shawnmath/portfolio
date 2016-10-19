"use strict";

angular.module("portfolio")
	.controller("DashboardEditCtrl", [
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
			$scope.save = function(){
				console.log($stateParams.id);
				GetWorkItem.update({title: $stateParams.id}, $scope.workItem, function(){					
					$location.path("/dashboard");
				});				
			};

	}]);