"use strict";

angular.module("portfolio")
	.controller("ContactCtrl", [
		"$scope", 
		"$state",
		"$location",
		"ContactSvc", 
		function($scope, $state, $location, ContactSvc){					

			$scope.send = function(){				
				ContactSvc.save($scope.contactData, function(data){										
					$scope.confMsg = data.message;

					$(".footer__confMsg p").addClass("active");
					
					if( data.status === "success" ){
						$(".footer__form input[type='text'], .footer__form textarea").val("");						
						setTimeout(function(){							
							$(".footer__confMsg p").removeClass("active");
						}, 5000);
					}					
				});	
			};

	}]);