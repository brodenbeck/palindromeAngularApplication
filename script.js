var app = angular.module('angularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

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

});