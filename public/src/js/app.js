"use strict";

angular.module("portfolio", ["ngResource", "ngAnimate", "mainRoutes", "dashboardRoutes"])
	.run(["$rootScope", "$state", "$location", "UserStatus", function($rootScope, $state, $location, UserStatus){
		$rootScope.$on("$stateChangeStart", function(event, toState, fromState){
			var restricted = ( toState.data ) ? toState.data.restricted : false;
									
			UserStatus.getUserStatus().$promise.then(function(userStatus){
				console.log(userStatus.status);
				if( !userStatus.status && restricted ){
					event.preventDefault();
					$state.go("login", {});
				}			
			});			
		});

		$rootScope.$on("$stateChangeSuccess", function(){
			document.body.scrollTop = 0;
		});
	}]);

