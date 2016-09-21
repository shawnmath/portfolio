"use strict";

angular.module("portfolio")
	.service("ContactSvc", ["$resource", function($resource){
		return $resource("/form/contact");
	}]);	