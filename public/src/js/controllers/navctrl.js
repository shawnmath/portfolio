"use strict";

angular.module("portfolio")
	.controller("NavCtrl", [
		"$rootScope", 
		"$scope", 
		"$state", 
		function($rootScope, $scope, $state){
				
			// Set page type & current page
			$scope.$on("$stateChangeSuccess", function(){
				$scope.pageType = $state.current.data.pageType;
				$scope.currentPage = $state.current.name;
			});

			// Scroll to contact form
			$scope.goToContact = function(){
				$("body, html").animate({
					scrollTop: $(".footer").offset().top
				}, 1000);
			};

			// Display mobile menu on burger click			
			$scope.showMenu = function(){
				$(".burger").toggleClass("active");

				if( !$(".menu__links").hasClass("active") ){									
					$(".menu").addClass("mobileDisplay");
					fadeInMenu();		
				} else {
					fadeOutMenu();
					$(".menu").removeClass("mobileDisplay");
				}			
			};

			// Hide menu on menu link click
			$scope.hideMenu = function(){
				if( $(window).outerWidth() < 641 ){
					$(".burger").removeClass("active");				
					fadeOutMenu();
					$(".menu").removeClass("mobileDisplay");	
				}				
			};

			// Util fn's
			function fadeInMenu(){
				$(".menu__links").addClass("active").fadeIn(300, function(){
					$(".menu__links li").each(function(indx){
						$(this).delay(indx*100).animate({
							opacity: 1
						}, 500);
					});
				});
			}

			function fadeOutMenu(){
				$(".menu__links").removeClass("active").fadeOut(100, function(){
					$(".menu__links li").css("opacity", 0);							
				});
			}

			$(window).resize(function(){
				if( $(window).outerWidth() > 640 ){
					$(".burger").removeClass("active");
					$(".menu.mobileDisplay").removeClass("mobileDisplay");
					$(".menu__links").removeClass("active").css("display", "block");
					$(".menu__links li").css("opacity", 1);					
				} else {
					$(".menu__links").css("display", "none");
					$(".menu__links li").css("opacity", 0);
				}
			});
	}]);