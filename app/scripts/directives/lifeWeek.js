angular.module('desktopApp')
    .directive('lifeWeek', function(){
        return {
        restrict: 'E',
        scope: {
            weeks: "=",
            myAge: "=",
            windowWidth: "="
        },
        templateUrl: 'scripts/directives/lifeWeek.html',
        link: function (scope) {
            scope.mathFloor = Math.floor;
        }
    };
    });
