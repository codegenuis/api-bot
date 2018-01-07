var myApp = angular.module('myApp');

myApp.controller('UsersController', ['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	$scope.getUsers = function(){
		$http.get('/api/users').success(function(response){
			$scope.users = response;
		})
	}
}]);