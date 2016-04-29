angular.module('desktopApp')
    .directive('resize', function($window) {
        return function(scope, element) {
            var w = angular.element($window);

            scope.getWindowDimensions = function() {
                return {
                    'h': w.height(),
                    'w': w.width()
                };
            };
            scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
                scope.windowHeight = newValue.h;
                scope.windowWidth = newValue.w;

                widthInteger = scope.windowWidth.toString().split('');
                scope.rgbaColor = widthInteger[0] + widthInteger[0] + ", " + widthInteger[1] + widthInteger[1] + ", " + widthInteger[2] + widthInteger[2];

                scope.style = function() {
                    return {
                        'height': (newValue.h - 100) + 'px',
                        'width': (newValue.w - 100) + 'px'
                    };
                };
            }, true);

            w.bind('resize', function() {
                scope.$apply();
            });
        };
    });
