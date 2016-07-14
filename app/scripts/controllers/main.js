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
        vm.profile = {
          "avatar": "images/Jon_Samp_SF_zoomed.jpg",
          "name": "Jon Samp",
          "description": "I'm a front-end developer in Chicago. I like photography, love coffee, and am about to get a dog.",
          "socialIcons": [{
                "name": "Github",
                "icon": "fa-github",
                "url": "https://github.com/jonsamp"
            }, {
                "name": "Codepen",
                "icon": "fa-codepen",
                "url": "http://codepen.io/jonsamp/"
            }, {
                "name": "Medium",
                "icon": "fa-medium",
                "url": "https://medium.com/@jonsamp"
            }, {
                "name": "Twitter",
                "icon": "fa-twitter",
                "url": "https://twitter.com/jonsamp"
            }]
        };
        vm.breakPoint = 767;

        vm.projects = {
          'responsive': {
            'name': 'Responserator',
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
