var app = angular.module('angularApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/form.html',
		controller: 'formController'
	});

	$routeProvider.when('/palindrome', {
		templateUrl: 'partials/ngPalindrome.html',
		controller: 'palindromeController'
	});

	$routeProvider.otherwise({
		redirectTo: '/error',
		templateUrl: 'html/error.html',
		controller: 'errorController'
	});
})