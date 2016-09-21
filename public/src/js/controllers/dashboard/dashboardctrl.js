"use strict";

angular.module("portfolio")
	.controller("DashboardCtrl", [
		"$scope", 
		"$stateParams",
		"$location",
		"GetAllWork", 
		"GetWorkItem", 
		function($scope, $stateParams, $location, GetAllWork, GetWorkItem){

			// Dashboard Index Page - display list of work items
			GetAllWork.query(function(work){		
				$scope.work = work;				
			});

			// Add New Work Item
			$scope.save = function(){
				GetAllWork.save($scope.workItem, function(){
					$location.path("/dashboard");
				});
				console.log($scope.workItem);
			};

	}]);