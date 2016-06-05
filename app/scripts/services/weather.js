angular.module('desktopApp')
    .factory('weather', ['$http', function($http) {
        return $http.get('http://api.wunderground.com/api/8f4fcb7cc3c8f50f/conditions/geolookup/q/autoip.json')
            .success(function(response) {
                return response.data;
            });
    }]);
