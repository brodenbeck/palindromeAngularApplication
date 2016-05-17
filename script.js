var app = angular.module('angularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('error');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/form.html',
			controller: 'formController'
		})

		.state('palindrome', {
			url: '/palindrome',
			templateUrl: 'partials/ngPalindrome.html',
			controller: 'palindromeController'
		})

		.state('api', {
			url: '/api',
			templateUrl: 'partials/api.html',
			controller: 'apiController'
		})

		.state('error', {
			url: '/error',
			templateUrl: 'partials/error.html',
			controller: 'errorController'
		})

});