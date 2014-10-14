(function(){
	var blog_mod=angular.module('blogs_mod',['ngRoute']);

	blog_mod.controller('BlogController',['$scope','blogger',function($scope,blogger){
		$scope.currentBlog={};
		this.getBlogs= function(start){
			blogger.getBlogs(start).success(function(data){
				$scope.blogs=data;;
			}).error(function(data,status){
				alert(data);
			});
		};
		this.send=function(){
			blogger.send($scope.currentBlog).success(function(data,status){
				if($scope.currentBlog._id){
					console.log('1'+$scope.currentBlog._id);
					for(var index=0;index<$scope.blogs.length;index++){
						if($scope.blogs[index]._id===blog._id){
							$scope.blogs[index]=$scope.currentBlog;
							break;
						}
					}
				}else{
					$scope.blogs.push(data);
				}
				$scope.currentBlog={};
			}).error(function(data,status){
				alert(data);
			});
		};
		this.deleteBlog=function(blog){
			blogger.remove(blog).success(function(data,status){

				for(var index=0;index<$scope.blogs.length;index++){
					if($scope.blogs[index]._id===blog._id){
						$scope.blogs.splice(index,1);
						break;
					}
				}
			}).error(function(data,status){
				alert(data);
			});
		};
		this.showBlog=function(blog){
			$scope.currentBlog=blog;
		}
		this.cancel=function(){
			$scope.currentBlog={};
		};
		this.getBlogs(0);
	}]);

	blog_mod.factory('blogger', ['$window','$http', function(win,http) {
      return {
      	getBlogs: function(start){
			return http.get('/authenticated/blogs/all',{params: {start: start||0,limit: 10}});
    	},
    	send: function(blog){
    		if(blog._id){
				return http.put('/authenticated/blogs/'+blog._id,blog);
			}else{
				return http.post('/authenticated/blogs/',blog);
			}
    	},
    	remove: function(blog){
    		return http.delete('/authenticated/blogs/'+blog._id);
      	}
      };
	}]);

	blog_mod.directive('blogWidget',function(){
		return {
			restrict: 'E',
			templateUrl: './../modules/blogs/templates/form.html'
		}
	})
	blog_mod.config(function($routeProvider,$locationProvider){
		$routeProvider.when('/all_blogs',{
			templateUrl: './../modules/blogs/templates/index.html',
			controller: 'BlogController',
			controllerAs:'blogController'
		}).when('/new',{
			templateUrl: './../modules/blogs/templates/new.html',
			controller: 'BlogController',
			controllerAs:'blogController'
		}).when('/edit/:id',{
			templateUrl: './../modules/blogs/templates/edit.html',
			controller: 'BlogController',
			controllerAs:'blogController'
		}).when('/show/:id',{
			templateUrl: './../modules/blogs/templates/show.html',
			controller: 'BlogController',
			controllerAs:'blogController'
		}).otherwise({
        	redirect: '#/all_blogs'
    	});
	});
})();