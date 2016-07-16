'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:CoffeeCtrl
 * @description
 * # CoffeeCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('CoffeeCtrl', ['$interval', function($interval) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        'use strict';
        var vm = this;

        function setWeather() {
            $.ajax({
                url: 'https://api.forecast.io/forecast/a0851d6b87a2a541d0fbaff2d0f7518b/41.9035690,-87.6715350',
                dataType: 'JSONP',
                jsonpCallback: 'callback',
                type: 'GET',
                success: function (response) {
                    console.log(response);
                    vm.icon = 'images/weather_icons/' + response.currently.icon + '.svg';
                    vm.temp = response.currently.temperature;
                    vm.summary = response.minutely.summary;
                    var condition = response.currently.icon;
                    setWeatherBg(condition);
                }
            });
        }

        function setWeatherBg(icon) {
            var gradient = {
                'clear-day': ['#2BC0E4', '#EAECC6', 'black'],
                'clear-night': ['#283E51', '#4B79A1', 'white'],
                'rain': ['#360033', '#0b8793', 'white'],
                'snow': ['#274046', '#E6DADA', 'white'],
                'sleet': ['#403B4A', '#E7E9BB', 'white'],
                'wind': ['#003973', '#E5E5BE', 'white'],
                'fog': ['#8e9eab', '#eef2f3', 'black'],
                'cloudy': ['#757F9A', '#D7DDE8', 'black'],
                'partly-cloudy-day': ['#757F9A', '#D7DDE8', 'black'],
                'partly-cloudy-night': ['#16222A', '#3A6073', 'white']
            };

            for (var condition in gradient) {
                if (icon === condition) {
                    var bottomColor = gradient[condition][0];
                    var topColor = gradient[condition][1];
                    vm.bgGradient = "background: linear-gradient(to top, " + bottomColor + " , " + topColor + ");"
                    vm.color = "color: " + gradient[condition][2];
                    return;
                } else {
                    vm.bgGradient = "background: linear-gradient(to top, #757F9A, #D7DDE8);"
                    vm.color = "color: black";
                }
            }
        }

        setWeather();
        // Get the weather every 5 minutes
        $interval(setWeather, 300000);

        vm.summaryText = false;
        vm.showSummary = function(){
          vm.summaryText = vm.summaryText ? false : true;
        };



        vm.sliderValue = 10;
        vm.bloomGrams = vm.sliderValue * 2;
        vm.pourGrams = vm.sliderValue * 16;
        vm.halfPour = vm.pourGrams / 2;

        vm.gramSlider = {
            value: 10,
            options: {
                floor: 10,
                ceil: 40,
                hideLimitLabels: true,
                onChange: function(sliderId, modelValue, highValue, pointerType) {
                    vm.sliderValue = modelValue;
                    vm.bloomGrams = modelValue * 2;
                    vm.pourGrams = modelValue * 16;
                    vm.halfPour = vm.pourGrams / 2;
                }
            }
        };

        vm.bloomCounter = 60;
        vm.pourCounter = 225 - vm.bloomCounter;

        vm.isDisabled = false;

        var bloomBegin,
            pourBegin;

        vm.startBloomTimer = function() {
          vm.isDisabled = true;
                bloomBegin = $interval(function() {
                    
                    vm.bloomCounter--;
                    if (vm.bloomCounter === 0) {
                        $('.timer').first().css('background-color', '#E84228');
                        vm.startPourTimer();
                        $interval.cancel(bloomBegin)
                    }
                }, 1000);

        }

        vm.startPourTimer = function() {
            pourBegin = $interval(function() {
                vm.pourCounter--;

                if (vm.pourCounter === 0) {
                    vm.isDisabled = false;
                    vm.bloomCounter = 60;
                    vm.pourCounter = 225 - vm.bloomCounter;
                    $('.timer').first().css('background-color', '#333');
                    $interval.cancel(pourBegin)
                }
            }, 1000);
        }

        vm.stopTimer = function() {
            $interval.cancel(bloomBegin);
            $interval.cancel(pourBegin);
            vm.isDisabled = false;
            vm.bloomCounter = 60;
            vm.pourCounter = 225 - vm.bloomCounter;
            $('.timer').first().css('background-color', '#333');
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

        vm.reload = function() {
          window.location.reload();
        }

    }]);
