"use strict";

angular.module("portfolio")
	.controller("AllWorkCtrl", [
		"$scope", 
		"GetAllWork", 
		function($scope, GetAllWork){		

			GetAllWork.query(function(work){		
				$scope.work = work;			
			});
			
			//Limit work items to first 4 on homepage
			$scope.limit = 4;
	}]);