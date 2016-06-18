'use strict';

/**
 * @ngdoc directive
 * @name desktopApp.directive:project
 * @description
 * # project
 */
angular.module('desktopApp')
  .directive('project', function () {
    return {
      templateUrl: 'views/project.html',
      restrict: 'E',
      scope: {
          project: "="
      }
    };
  });
