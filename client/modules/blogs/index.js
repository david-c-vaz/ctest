(function(){
	var blog_mod=angular.module('blogs_mod',['ngRoute']);

	blog_mod.controller('BlogController',['$scope','blogger',function($scope,blogger){
		alert('in');
		this.blogs=blogger.getBlogs();
	}]);

	blog_mod.factory('blogger', ['$window','$http', function(win,http) {
      return {
      	getBlogs: function(){
			http.get('/authenticated/blogs/all',{params: {start: start||0,limit: 10}}).success(function(data){
				return data;
			});	
    	}
      };
	}]);

	blog_mod.config(function($routeProvider,$locationProvider){
		$routeProvider.when('/authenticated/blogs#/',{
			templateUrl: './modules/blogs/templates/index.html',
			controller: 'BlogController',
			controllerAs:'blogController'
		}).otherwise({
        	redirect: '/authenticated/blogs#/'
    	});
	});
})();