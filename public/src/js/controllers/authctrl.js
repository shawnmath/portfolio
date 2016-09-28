"use strict";

angular.module("portfolio")
	.controller("AuthCtrl", [
		"$scope", 
		"$state",
		"$location",
		"LoginSvc", 
		"LogoutSvc",
		"RegisterSvc", 
		function($scope, $state, $location, LoginSvc, LogoutSvc, RegisterSvc){		

			if( $state.current.name === "logout" ){
				LogoutSvc.get({}, function(data){										
					$location.path("/");
				});
			}

			$scope.register = function(){
				RegisterSvc.save($scope.registerData, function(data){					
					$location.path("/");
				});	
			};

			$scope.login = function(){
				LoginSvc.save($scope.loginData, function success(response){					
					$location.path("/dashboard");
				}, function error(response){					
					$location.path("/");
				});
			};
	}]);