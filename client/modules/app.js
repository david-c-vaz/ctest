var app=angular.module('testApplication',['ngRoute','static-pages']);
app.config(function($routeProvider,$locationProvider){
$routeProvider.when('/',{
			templateUrl: './modules/static_pages/templates/home.html',
			controller: 'PageController',
			controllerAs:'pgController'
		});
});