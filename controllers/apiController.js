var app = angular.module('angularApp');

app.controller('apiController', function($scope, mapService) {
	$scope.map = mapService.initMap();
});
	