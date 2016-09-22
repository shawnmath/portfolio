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

			// Fade In Imgs
			$scope.init = function(){
				$(document).ready(function(){					

					$(".workItem__link img").each(function(indx){
						var imgSrc = $(this).attr("data-img-src");
						$(this).attr( "src", imgSrc );
					});

					$(".workItem__link").animate({
						"opacity": 1								
					}, 2000);		

					// $(".workItem__link img").each(function(indx){					
					// 	var imgSrc = $(this).attr("data-img-src");
					// 	$(this).attr( "src", imgSrc );
					// 	$(this).on("load", function(){
					// 		var d = new Date(),
					// 			t = d.getTime();
					// 		console.log( $(this).attr("src") + ": " + t );						

					// 		$(this).parent()
					// 			.delay(indx * 250)
					// 			.animate({
					// 				"opacity": 1								
					// 			}, 500);
					// 	});

					// 	// var imgSrc = $(this).attr("data-img-src");
					// 	// $(this).attr( "src", imgSrc );
					// 	// $(this).parent()
					// 	// 	.delay(indx * 250)
					// 	// 	.animate({
					// 	// 		"opacity": 1								
					// 	// 	}, 500);
					// });
				});
				
			}; 

			setTimeout(function(){
				$scope.init();
			}, 500);
	}]);