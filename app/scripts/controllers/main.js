'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', ['portfolioData', 'instagram', function(portfolioData, instagram) {

        var vm = this;
        vm.profile = portfolioData;

        instagram.then(function(data){
            var response = data.data.data;

            vm.instagramPhotos = [];

            response.forEach(function(photo){
                vm.instagramPhotos.push({
                    'image': photo.images.standard_resolution.url,
                    'caption': photo.caption.text
                });
            });
        });

        // TODO: Figure out how to put the lifeWeeks logic in its own controller

        var lifeWeeks = portfolioData.lifeWeeks;

        // Array to put final object in
        vm.weeks = [];

        // configuration
        var startDate = Date.UTC(1989, 8, 18);
        var weekLength = 6.048e+8;
        var yearLength = 31449600000;
        var endDate = Date.UTC(2089, 8, 19);

        // List every week
        var weeksArray = [];
        for (var i = startDate; i <= endDate; i += weekLength) {
            weeksArray.push(i);
        }

        // push the date to vm.weeks, and adds id
        vm.weeks = weeksArray.map(function(week, index) {
            return {
                'id': index,
                'date': week,
                'type': '',
                'description': '',
                'class': [index],
                'template': 'views/templates/general.tpl.html',
                'value': ''
            };
        });

        // Figure out if the week is in the past or in the future
        // Get current week
        var today = new Date();
        var month = today.getMonth();

        // Used + 1 since the weeks start on Monday
        var startOfWeek = today.getDate() - today.getDay() + 1;
        var year = today.getYear() + 1900;
        var thisWeek = Date.UTC(year, month, startOfWeek);

        // Add classes for past, present, future
        for (var i = 0; i < vm.weeks.length; i++) {
            if (thisWeek > vm.weeks[i].date) {
                vm.weeks[i].class.push('past');
            } else if (thisWeek === vm.weeks[i].date) {
                vm.weeks[i].class.push('thisWeek');
                vm.weeks[i].description = "This week."
            } else {
                vm.weeks[i].class.push('future');
            }
        }

        // Add class for birthdays
        for (var i = 0; i < lifeWeeks.birthdayWeeks.length; i++) {
            vm.weeks[lifeWeeks.birthdayWeeks[i]].class.push('birthday');
            vm.weeks[lifeWeeks.birthdayWeeks[i]].value = i;
            vm.weeks[lifeWeeks.birthdayWeeks[i]].template = 'views/templates/birthday.tpl.html';
        }

        // Adds color to weeks after life expectancy;
        for (var i = 4123; i < vm.weeks.length; i++) {
            vm.weeks[i].class.push('after-life');
        }

        // find my current age
        var birthDate = new Date(1989, 9, 21);
        var now = new Date();
        var days = Math.floor((now - birthDate) / 86400000);
        var myAge = days / 365.25;
        vm.myAge = Math.floor(myAge);

        // Adds events to week calendar from lifeWeeks object
        lifeWeeks.events.map(function(event) {
            vm.weeks[event.id].class.push(event.class);
            vm.weeks[event.id].description = event.description;
        });
    }]);
