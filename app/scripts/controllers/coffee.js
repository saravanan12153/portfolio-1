'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:CoffeeCtrl
 * @description
 * # CoffeeCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('CoffeeCtrl', ['$interval', 'weather', function($interval, weather) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var vm = this;

        weather.then(function(data) {
            vm.currentWeather = ((data.data.main.temp - 273) * (9 / 5)) + 32;
        });

        function updateTime() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var t_str = hours + ":" + minutes + " ";
            if (hours > 11) {
                t_str = (hours - 12) + ":" + minutes;
                t_str += "PM";
            } else {
                t_str += "AM";
            }

            vm.currentTime = t_str;
        }
        $interval(updateTime, 1000);
        updateTime();
    }]);
