'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', ['info', function(info) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var vm = this;

        // Gets current local time
        // vm.time = new Date().toLocaleString();

        vm.profile = info;
        console.log(info);
    }]);
