"use strict";

angular.module("dashboardRoutes", ["ui.router"])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

		$stateProvider
			.state("dashboard", {
				url: "/dashboard",
				templateUrl: "/src/js/views/dashboard/index.html",
				controller: "DashboardCtrl",
				data: {
					restricted: true,
					pageType: "admin"
				}
			})
			.state("dashboard-add", {
				url: "/dashboard/add-new-work",
				templateUrl: "/src/js/views/dashboard/add.html",
				controller: "DashboardCtrl",
				data: {
					restricted: true,
					pageType: "admin"
				}
			})
			.state("dashboard-edit", {
				url: "/dashboard/:id/edit",
				templateUrl: "/src/js/views/dashboard/edit.html",
				controller: "DashboardEditCtrl",
				data: {
					restricted: true,
					pageType: "admin"
				}
			})
			.state("dashboard-delete", {
				url: "/dashboard/:id/delete",
				templateUrl: "/src/js/views/dashboard/delete.html",
				controller: "DashboardDeleteCtrl",
				data: {
					restricted: true,
					pageType: "admin"
				}
			});
	}]);

