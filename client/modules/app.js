var app=angular.module('testApplication',['ngRoute','static-pages','users_mod']);
app.config(function($routeProvider,$locationProvider){
$routeProvider.when('/',{
			templateUrl: './modules/static_pages/templates/home.html',
			controller: 'PageController',
			controllerAs:'pgController'
	}).when('/users',{
		templateUrl: './modules/users/templates/index.html',
		controller: 'UserController',
		controllerAs:'usrController'
	});
});