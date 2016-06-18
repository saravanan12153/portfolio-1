'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */
angular
  .module('desktopApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'rzModule'
  ])
  .config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/responsive', {
        templateUrl: 'views/responsive.html',
        controller: 'ResponsiveCtrl',
        controllerAs: 'vm'
      })
      .when('/coffee', {
        templateUrl: 'views/coffee.html',
        controller: 'CoffeeCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

      $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          'https://scontent.cdninstagram.com/**'
      ]);

  }]).filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}]);
