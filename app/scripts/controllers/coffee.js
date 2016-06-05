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
        'use strict';
        var vm = this;

        vm.lastUpdate = "";



        // Initializes the weather on load
        weather.then(function(data) {

            vm.currentWeather = data.data.current_observation.temp_f;
            vm.currentCondition = data.data.current_observation.weather.toLowerCase();

            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            vm.lastUpdate = hours + ":" + minutes + ":" + seconds;
        })

        // Updates the weather every 7 minutes
        setInterval(function(){
            weather.then(function(data) {
                vm.currentWeather = data.data.current_observation.temp_f;
                vm.currentCondition = data.data.current_observation.weather.toLowerCase();
                var currentTime = new Date();
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var seconds = currentTime.getSeconds();
                vm.lastUpdate = hours + ":" + minutes + ":" + seconds;
            })
        }, 420000);


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
                t_str += "PM";
                if( hours == 12 ){
                    t_str = "12:" + minutes;
                    t_str += "PM";
                }
            } else if (hours === 0) {
                t_str = '12:' + minutes + "AM";

            }else {
                t_str += "AM";
            }

            vm.currentTime = t_str;
        }
        $interval(updateTime, 1000);
        updateTime();
    }]);
