angular.module('desktopApp')
    .directive('lifeWeek', function(){
        return {
        restrict: 'E',
        scope: {
            weeks: "=",
            myAge: "=",
            windowWidth: "=",
            breakPoint: "="
        },
        templateUrl: 'scripts/directives/lifeWeek.html',
        link: function (scope) {
            scope.mathFloor = Math.floor;
        }
    };
    });
