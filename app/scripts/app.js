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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'timer'
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
        controllerAs: 'coffee'
      })
      .otherwise({
        redirectTo: '/'
      });

      $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          'https://scontent.cdninstagram.com/**'
      ]);

  }]);
