(function(){
	var pages_mod=angular.module('static-pages',['ngRoute']);
	pages_mod.controller('PageController',function($scope){
		this.message="Welcome to my Site";
	});
	pages_mod.config(function($routeProvider,$locationProvider){
		$routeProvider.when('/home',{
			templateUrl: './modules/static_pages/templates/home.html',
			controller: 'PageController',
			controllerAs:'pgController'
		}).when('/about',{
			templateUrl: './modules/static_pages/templates/about.html',
			controller: 'PageController',
			controllerAs:'pgController'
		}).when('/contact',{
			templateUrl: './modules/static_pages/templates/contact.html',
			controller: 'PageController',
			controllerAs:'pgController'
		}).otherwise({
        	redirect: '/home'
    	});
	});
})();