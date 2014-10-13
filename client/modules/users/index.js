(function(){
	var user_mod=angular.module('users_mod',['ngRoute']);

	user_mod.controller('UserController',['$scope','authenticator',function($scope,authenticator){
		var controller=this;
		this.login= function(){
			authenticator.login(controller.userName,controller.password);
		};

		this.register= function(){
			authenticator.register({
				userName: controller.userName,
				firstName: controller.firstName,
				lastName: controller.lastName,
				password: controller.password,
					
			});
		};
		this.logout= function(){
			authenticator.logout();
		};
	}]);

	user_mod.factory('authenticator', ['$window','$http', function(win,http) {
      return {
      	register: function(user){
			http.post('/register',user).success(function(data,status){
				win.alert("User successfully registered");
			}).error(function(data,status){
				win.alert("Regristration Failled");
			});
    	},
    	login: function(userName,password){
    		var data={
    			userName: userName,
    			password:password
    		}
			http.post('/sign_in',data).success(function(data,status){
				win.location='/authenticated/blogs';
			}).error(function(data,status){
				win.alert("Authentication Failure");
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