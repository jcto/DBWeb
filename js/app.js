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
	}).state('butto',{
		url: "/buttons",
        templateUrl: "templates/buttons.html",
        controller: "buttonsController"
	})
	.state('list',{
		url: "/list",
        templateUrl: "templates/list.html",
        controller: "listController"
	})
	.state('actionSheet',{
		url: "/actionSheet",
        templateUrl: "templates/js/actionSheet.html",
        controller: "actionSheetController"
	})
	.state('backDrop',{
		url: "/backDrop",
        templateUrl: "templates/js/backdrop.html",
        controller: "backDropController"
	})
	.state('events',{
		url: "/events",
        templateUrl: "templates/js/events.html",
        controller: "eventsController"
	})
	.state('popover',{
		url: "/popover",
        templateUrl: "templates/js/popover.html",
        controller: "popoverController"
	})
	.state('keyboard',{
		url: "/keyboard",
        templateUrl: "templates/js/keyboard.html",
//      controller: "eventsController"
	})
	.state('lists',{
		url: "/lists",
        templateUrl: "templates/js/lists.html",
	})
	.state('loading',{
		url: "/loading",
        templateUrl: "templates/js/loading.html",
	})
	.state('formIputs',{
		url: "/formInputs",
        templateUrl: "templates/js/formInputs.html",
        controller: "formIputsController"
	})
	.state('gesture',{
		url: "/gesture",
        templateUrl: "templates/js/gesture.html",
        controller: "gestureController"
	})
	.state('js',{
		url: "/js",
        templateUrl: "templates/js/js.html",
//      controller: "actionSheetController"
	});
	$urlRouterProvider.otherwise('/index');
});