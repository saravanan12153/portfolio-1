angular.module('desktopApp')
	.factory('portfolioData', ['$http', function($http) {
    var url = 'https://s3.amazonaws.com/jon-samp-portfolio/lifeWeeks.min.json';
    return $http.get(url)
    .then(function(data, status, headers, config) {
        return data.data.weeks;
    }).catch(function(err){
      console.log("Error: ", err);
    });
	}]);
