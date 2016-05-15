var app = angular.module('angularApp');

app.controller('formController', function($scope, $location, palindromeService) {
	$scope.isPalindrome = function(userInput) {
		palindromeService.getWord(userInput);
		$location.path('palindrome');
	}
});