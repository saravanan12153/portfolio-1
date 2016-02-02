'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var vm = this;

        // Gets current local time
        // vm.time = new Date().toLocaleString();

        vm.profile = {
            avatar: "images/Jon_Samp_SF.png",
            name: "Jon Samp",
            location: "Chicago, IL",
            work: [{
                "position": "AngularJS Developer",
                "organization": "Rightpoint",
                "url": "http://www.rightpoint.com/",
            }, {
                "position": "Pro Advisor",
                "organization": "Codecademy",
                "url": "https://www.codecademy.com/",
            }, {
                "position": "Co-founder",
                "organization": "Givvy",
                "url": "http://givvyapp.com/",
            }],
            socialIcons: [{
                "name": "Github",
                "icon": "fa-github-alt",
                "url": "https://github.com/jonsamp"
            }, {
                "name": "Medium",
                "icon": "fa-rss",
                "url": "https://medium.com/@jonsamp"
            }]
        };
    });
