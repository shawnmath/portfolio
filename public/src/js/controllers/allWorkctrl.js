"use strict";

angular.module("portfolio")
	.controller("AllWorkCtrl", [
		"$state",
		"$rootScope",
		"$scope", 
		"GetAllWork", 
		function($state, $rootScope, $scope, GetAllWork){		

			GetAllWork.query(function(work){		
				$scope.work = work;				
			});
			
			// Limit work items to first 4 on homepage
			$scope.limit = 4;

			// angular.element( document.querySelectorAll(".workItem__link img") ).ready(function(){
			// 	console.log("loaded..");
				
			// 	$scope.loadImgs();
				
			// });

			// Fade In Imgs
			$scope.init = function(){
				$(document).ready(function(){
					$(".workItem__link img").each(function(indx){					
					var imgSrc = $(this).attr("data-img-src");
					console.log(imgSrc);
					$(this)
						.delay(indx * 250)
						.attr( "src", imgSrc )
						//.removeClass("placeholder")
						.animate({
							"opacity": 0.4
						}, 500);
				});
				});
				
			}; 

			setTimeout(function(){
				$scope.init();
			}, 500);
	}]);