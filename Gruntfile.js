module.exports = function(grunt){
	"use strict";
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		jshint: {
			options: {
				"curly": true,
		    	"eqeqeq": true,
		    	"eqnull": true,
		    	"browser": true,
		    	"devel": true,
		    	"globalstrict": true,
				globals: {
					"angular": true,
					"jquery"  : true,
					"$": true
				}
			},
			all: ["public/src/js/**/*.js"]
		},

		uglify: {
			vendor: {
				files: {
					"public/dist/js/vendor.min.js": [
						"node_modules/jquery/dist/jquery.js",
						"node_modules/angular/angular.js",
						"node_modules/angular-ui-router/release/angular-ui-router.js",
						"node_modules/angular-resource/angular-resource.js",
						"node_modules/angular-animate/angular-animate.js",
					]
				}
			}, 
			app: {
				files: {
					"public/dist/js/app.min.js": [
						"public/src/js/**/*.js",
						"public/src/js/*.js"
					]
				}
			}
		},

		sass: {
			build: {
				files: {
					"public/dist/css/style.css": "public/src/sass/master.scss"
				}
			}
		},

		cssmin: {
			build: {
				files: {
					"public/dist/css/style.min.css": "public/dist/css/style.css"
				}
			}			
		},

		watch: {
			css: {
				files: ["public/src/sass/**/*.scss"],
				tasks: ["sass", "cssmin"]
			},
			js: {
				files: ["public/src/js/**/*.js"],
				tasks: ["jshint", "uglify"]
			}
		},

		nodemon: {
			dev: {
				script: "server/server.js"
			}
		},

		concurrent: {
			options: {
				logConcurrentObject: true				
			},
			tasks: ["nodemon", "watch"]
		}				
	});

	grunt.registerTask("default", [
		"sass",
		"cssmin",		
		"jshint",
		"uglify",
		"concurrent"
	]);
}