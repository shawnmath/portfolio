"use strict";

angular.module("portfolio")
	.controller("AuthCtrl", [
		"$scope", 
		"$state",
		"$location",
		"LoginSvc", 
		"LogoutSvc",
		"RegisterSvc", 
		"UserStatus",
		function($scope, $state, $location, LoginSvc, LogoutSvc, RegisterSvc, UserStatus){		

			console.log($state.current.name);

			if( $state.current.name === "logout" ){
				LogoutSvc.get({}, function(data){					
					console.log(data.status);
					UserStatus.getUserStatus().$promise.then(function(userStatus){
						console.log("from ctrl - logged out: " + userStatus.status);
					});
					$location.path("/");
				});
			}

			$scope.register = function(){
				RegisterSvc.save($scope.registerData, function(data){
					console.log(data.status);
					UserStatus.getUserStatus().$promise.then(function(userStatus){
						console.log("from ctrl - registered: " + userStatus.status);
					});
					$location.path("/");
				});	
			};

			$scope.login = function(){
				LoginSvc.save($scope.loginData, function success(response){
					console.log(response.status);
					UserStatus.getUserStatus().$promise.then(function(userStatus){
						console.log("from ctrl - logged in: " + userStatus.status);
					});
					$location.path("/dashboard");
				}, function error(response){					
					console.log(response);
					console.log(response.err);
					$location.path("/");
				});
			};
	

	}]);