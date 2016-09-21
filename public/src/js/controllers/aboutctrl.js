"use strict";

angular.module("portfolio")
	.controller("AboutCtrl", ["$scope", function($scope){		

		var skills_list = [
			"HTML5",
			"CSS3",
			"Javascript",
			"jQuery",
			"d3.js",
			"Angular",
			"Node.js",
			"Express",
			"MongoDB",
			"PHP",
			"Wordpress",
			"Git",
			"Grunt",
			"Google Analytics"
		];

		var split = 3,
			start = 0,
			stop = Math.ceil(skills_list.length / split);

		for( var i = start; i < split; i++ ){
			
			$scope["sl_" + i] = skills_list.slice(start, stop);

			start = stop;
			stop += stop;			
		}


	}]);
