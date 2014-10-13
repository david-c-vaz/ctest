(function(){
	var user_mod=angular.module('users_mod',['ngRoute']);

	user_mod.controller('UserController',['$scope','authenticator',function($scope,authenticator){
		this.login= function(){
			authenticator.login(this.userName,this.password);
		};

		this.register= function(){
			var user={
				userName: this.userName,
				firstName: this.firstName,
				lastName: this.lastName,
				password: this.password,
					
			};
			authenticator.register(user);
		};
		this.logout= function(){
			authenticator.logout();
		};
	}]);

	user_mod.factory('authenticator', ['$window','$http', function(win,http) {
      return {
      	register: function(username,password){
    		var data={
    			username: username,
    			password:password
    		}
			http.post('/api/v1/users/sign_in',data).success(function(data,status){
				win.alert("logged in");
			}).error(function(data,status){
				win.alert("Authentication Failure");
			});
    	},
    	login: function(username,password){
    		var data={
    			username: username,
    			password:password
    		}
			http.post('/api/v1/users/sign_in',data).success(function(data,status){
				win.alert("logged in");
			}).error(function(data,status){
				win.alert("Authentication Failure");
			});
    	},
    	logout: function(user_id){
    		http.delete('/api/v1/users/'+user_id).success(function(response,status){
				win.alert("logged out successfully");
			}).error(function(data, status){
				win.alert("Error logging out");
			});
    		
    	}
      };
	}]);

	user_mod.config(function($routeProvider,$locationProvider){
		$routeProvider.when('/sign_in',{
			templateUrl: './modules/users/templates/sign_in.html',
			controller: 'UserController',
			controllerAs:'usrController'
		}).when('/sign_up',{
			templateUrl: './modules/users/templates/sign_up.html',
			controller: 'UserController',
			controllerAs:'usrController'
		}).otherwise({
        	redirect: '/users/sign_in'
    	});
	});
})();