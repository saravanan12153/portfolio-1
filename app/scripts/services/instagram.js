angular.module('desktopApp')
    .factory('instagram', ['$http', function($http) {
        return {
            getSelfFeed: function() {
                $http.jsonp('https://api.instagram.com/v1/users/self/media/recent/?access_token=17942230.e281b92.8252eb3acca645b5a37b86388ee59137&callback=JSON_CALLBACK&count=3')
                .success(function(response) {
                    return response.data;
                });
            }
        };
    }]);
