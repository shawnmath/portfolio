"use strict";

angular.module("portfolio")
	.service("GetAllWork", ["$resource", function($resource){
		return $resource("/api/work");
	}])
	.service("GetWorkItem", ["$resource", function($resource){
		return $resource("/api/work/:id", {id: "@_id"}, {
			update: {
				method: "PUT"
			}
		});
	}]);