var app = angular.module('angularApp');

app.controller('palindromeController', function($scope, palindromeService) {
	$scope.isPal = palindromeService.isPalindrome();
});