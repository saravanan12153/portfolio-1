'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
	.controller('SwarmCtrl', ['swarm', function(swarm) {
    var vm = this;
    vm.breakPoint = 767;
    swarm.then(function(data){
      var checkins = data.data.response.checkins.items;
      vm.data = checkins;
    });
  }]);
