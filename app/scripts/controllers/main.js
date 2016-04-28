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

    }]);
