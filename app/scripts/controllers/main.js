'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', ['portfolioData', function(portfolioData) {

        var vm = this;
        vm.profile = portfolioData;
        vm.breakPoint = 767;

        vm.projects = {
          'responsive': {
            'name': 'Respons-erator',
            'url': 'http://jon-samp.com/#/responsive',
            'background': 'blue-gradient',
            'image': 'images/responsive.svg',
            'description': '@media queries made easy.'
          },
          'tacotime': {
            'name': 'Taco Time',
            'url': 'http://jonsamp.github.io/TacoTime',
            'background': 'red-gradient',
            'image': 'images/tacotime.png',
            'imageClass': 'taco',
            'description': 'Find the closest taco place.'
          },
          'givvy': {
            'name': 'Givvy',
            'url': 'http://givvyapp.com',
            'background': 'green-gradient',
            'image': 'images/givvy.svg',
            'description': 'Recommendations from friends.'
          }
        };

    }]);
