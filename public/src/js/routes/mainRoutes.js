"use strict";

angular.module("mainRoutes", ["ui.router"])
	.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function($stateProvider, $locationProvider, $urlRouterProvider){

		$locationProvider.html5Mode({enabled: true, requireBase: false});

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",								
				views: {
					"": {
						templateUrl: "/src/js/views/home.html",
						controller: "AllWorkCtrl as main",
					},
					"footer@home": {
						templateUrl: "/src/js/views/footer.html",
						controller: "ContactCtrl"
					}
				},
				data: {
					pageType: "main"
				}
			})
			.state("work", {
				url: "/work/:id",
				views: {
					"": {
						templateUrl: "/src/js/views/work-item.html",
						controller: "WorkCtrl"
					},
					"footer@work": {
						templateUrl: "/src/js/views/footer.html",
						controller: "ContactCtrl"
					}	
				},				
				data: {
					pageType: "main"
				}				
			})
			.state("allWork", {
				url: "/client-work",
				views: {
					"": {
						templateUrl: "/src/js/views/all-work.html",
						controller: "AllWorkCtrl",
					},
					"footer@allWork": {
						templateUrl: "/src/js/views/footer.html",
						controller: "ContactCtrl"
					}
				},				
				data: {
					pageType: "main"
				}
			})
			.state("about", {
				url: "/about",
				views: {
					"": {
						templateUrl: "/src/js/views/about.html",
						controller: "AboutCtrl",
					},
					"footer@about": {
						templateUrl: "/src/js/views/footer.html",
						controller: "ContactCtrl"
					}
				},				
				data: {
					pageType: "main"
				}
			})			
			.state("login", {
				url: "/login",
				templateUrl: "/src/js/views/auth/login.html",
				controller: "AuthCtrl",
				data: {
					pageType: "main"
				}
			})
			.state("logout", {
				url: "/logout",
				controller: "AuthCtrl",
				data: {
					pageType: "main"
				}
			})			
			.state("register", {
				url: "/register",
				templateUrl: "/src/js/views/auth/register.html",
				controller: "AuthCtrl",				
				data: {
					pageType: "main"
				}
			});
	}]);