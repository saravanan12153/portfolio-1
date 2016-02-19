'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', [ '$firebaseObject', function($firebaseObject) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var ref = new Firebase('https://sweltering-fire-7706.firebaseio.com');
        var vm = this;
        vm.profile = $firebaseObject(ref);

        // Gets current local time
        // vm.time = new Date().toLocaleString();

    }]);
