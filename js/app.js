angular.module("starter", ['ionic', 'starter.controllers', 'starter.services']).run(function() {

}).config(function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('index', {
		  url: "/index",
          templateUrl: "templates/home.html",
          controller: "indexController"
	})
	.state('infiniteScroll',{
		  url: "/infiniteScroll",
          templateUrl: "templates/infiniteScroll.html",
          controller: "infiniteScrollController"
	}).state('css',{
		url: "/css",
        templateUrl: "templates/cssComponents.html",
        controller: "cssComponentsController"
	});
	$urlRouterProvider.otherwise('/index');
});