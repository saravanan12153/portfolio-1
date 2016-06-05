'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:CoffeeCtrl
 * @description
 * # CoffeeCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('CoffeeCtrl', ['$interval', '$http', function($interval, $http) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        'use strict';
        var vm = this;
        
        function setWeather() {
            $http.get('http://api.wunderground.com/api/8f4fcb7cc3c8f50f/conditions/geolookup/q/autoip.json')
                .success(function(response) {
                    var weatherObj = response.current_observation;
                    vm.currentWeather = weatherObj.temp_f;
                    vm.currentCondition = weatherObj.weather;
                    vm.weatherIcon = 'images/weather_icons/' + weatherObj.icon + '.svg';
                });
        }

        setWeather();
        $interval(setWeather, 420000);



        // Gets time working, and updating every second.
        function updateTime() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var t_str = hours + ":" + minutes;

            if (hours > 11) {
                t_str = (hours - 12) + ":" + minutes;
                t_str += " PM";
                if (hours == 12) {
                    t_str = "12:" + minutes;
                    t_str += " PM";
                }
            } else if (hours === 0) {
                t_str = '12:' + minutes + "AM";

            } else {
                t_str += "AM";
            }

            vm.currentTime = t_str;
        }
        $interval(updateTime, 1000);
        updateTime();

    }]);
