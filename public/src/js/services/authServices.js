"use strict";

angular.module("portfolio")
	.service("LoginSvc", ["$resource", function($resource){
		return $resource("/login");
	}])
	.service("LogoutSvc", ["$resource", function($resource){
		return $resource("/logout");
	}])
	.service("RegisterSvc", ["$resource", function($resource){
		return $resource("/register");
	}])
	.service("UserStatus", ["$resource", function($resource){

		var getUserStatus = function(){
			var getStatus = $resource("/user-status");
			return getStatus.get({}, function(data){
				return data.status;
			});			
		};

		return {					
			getUserStatus: getUserStatus
		};
	}]);