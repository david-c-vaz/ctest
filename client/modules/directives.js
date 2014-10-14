app.directive('header',function(){
		return {
			restrict: 'E',
			templateUrl: './modules/partials/_header.html'
		};
	});
app.directive('footer',function(){
		return {
			restrict: 'E',
			templateUrl: './modules/partials/_footer.html'
		};
	});

app.directive('authenticatedHeader',function(){
		return {
			restrict: 'E',
			templateUrl: './../modules/partials/authenticated_header.html',
			controller: function($scope,$window,$cookies,$http,$location){
				this.userName=$cookies.userName;
				this.log_out=function(){
					$http.delete('/authenticated/sign_out').success(function(response,status){
						 $window.location.href= "/#/sign_in";
					}).error(function(data, status){
						$window.alert('Error failed to signout');
					});
				}
			},
			controllerAs: 'navController'
		};
	});
app.directive('authenticatedFooter',function(){
		return {
			restrict: 'E',
			templateUrl: './../modules/partials/authenticated_footer.html'
		};
	});