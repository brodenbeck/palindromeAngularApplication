angular.module('angularApp')
.factory('mapService', function(){ 

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.33, lng: -83.04},
          zoom: 14
        });
      }

      return {
      	initMap: initMap
      }

});