angular.module('desktopApp')
    .directive('lifeWeek', function(){
        return {
        restrict: 'E',
        scope: {
            weeks: "="
        },
        templateUrl: 'scripts/directives/lifeWeek.html'
    };
    });
