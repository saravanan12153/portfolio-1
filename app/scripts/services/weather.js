angular.module('desktopApp')
    .factory('weather', ['$http', function($http) {
        var latitude = 41.903412878282225;
        var longitude = -87.67159575682756;
        var API_KEY = "01b46659448bc9aa3636d754bf36a1bd";
        return $http.get('http://api.openweathermap.org/data/2.5/weather' +
                "?lat=" + latitude +
                "&lon=" + longitude +
                "&appid=" + API_KEY)
                .success(function(response) {
                    console.log(response.data);
                    return response.data;
                });
    }]);
