angular.module('desktopApp')
    .factory('weather', ['$http', function($http) {
        var latitude = 41.9035041;
        var longitude = -87.67137919999999;
        var API_KEY = "8f4fcb7cc3c8f50f";
        return $http.get('http://api.wunderground.com/api/' +
                API_KEY + "/" +
                "conditions/geolookup/q/" +
                latitude + "," +
                longitude +
                ".json"
                )
                .success(function(response) {
                    console.log(response.data);
                    return response.data;
                });
    }]);
