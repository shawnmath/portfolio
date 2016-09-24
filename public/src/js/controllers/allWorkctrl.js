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

						$(this).on("load", function(){
							if( $(this).get(0).complete ){							
								$(this).parent()
									.delay(indx * 100)
									.animate({
										"opacity": 1
									}, 1500);
							}
						});
						
					});					

					// $(".workItem__link").each(function(indx){
					// 	$(this)
					// 		.delay(indx * 250)
					// 		.animate({
					// 			"opacity": 1								
					// 		}, 2000);		
					// });

					// $(".workItem__link img").on("load", function(){						
					// 	var img = $(this);

					// 	if( img.complete ){
					// 		$(this).parent()								
					// 			.animate({
					// 				"opacity": 1
					// 			}, 2000);
					// 	}

					// 	// $(".workItem__link").each(function(indx){
					// 	// 	$(this)
					// 	// 		.delay(indx * 250)
					// 	// 		.animate({
					// 	// 			"opacity": 1								
					// 	// 		}, 2000);		
					// 	// });
					// });			
				});				
			}; 

			setTimeout(function(){
				$scope.init();
			}, 500);			
	}]);