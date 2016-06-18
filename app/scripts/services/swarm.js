angular.module('desktopApp')
	.factory('swarm', ['$http', function($http) {
		return $http.get('https://api.foursquare.com/v2/users/self/checkins?oauth_token=EFSXKQ40LUQDHXBOIVCOZ3X0ABEDIG541KQYW2BNUCPEIRLY&v=20160616&m=swarm')
			.success(function(response) {
				return response.response.checkins.items;
			});
	}]);
