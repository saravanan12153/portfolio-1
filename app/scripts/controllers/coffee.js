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


        // Initializes the weather on load
        weather.then(function(data) {
            setWeather(data);
        });

        // Updates the weather every 7 minutes
        $interval(function(){
            weather.then(function(data) {
                setWeather(data);
            })
        }, 420000);

        function setWeather(data) {
            var weatherObj = data.data.current_observation;
            vm.currentWeather = weatherObj.temp_f;
            vm.currentCondition = weatherObj.weather;
            vm.weatherIcon = 'images/weather_icons/' + weatherObj.icon + '.svg';
        }


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
                if( hours == 12 ){
                    t_str = "12:" + minutes;
                    t_str += " PM";
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
