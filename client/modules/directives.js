app.directive('header',function(){
		return {
			restrict: 'E',
			templateUrl: './modules/static_pages/templates/_header.html',
			controller: function($window,$cookies,$http){
				this.loggedIn=($cookies.userName ? true : false);
				var http=$http;
				var control=this;
				var win=$window;
				this.log_out=function(){
					console.log('logging out');
					http.delete('/authenticated/sign_out').success(function(response,status){
						win.location="/#/sign_in"
					}).error(function(data, status){
						alert('Error failed to signout');
					});
				}
			},
			controllerAs: 'navController'
		};
	});
app.directive('footer',function(){
		return {
			restrict: 'E',
			templateUrl: './modules/static_pages/templates/_footer.html'
		};
	});