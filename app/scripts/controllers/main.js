'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('MainCtrl', ['$firebaseObject', function($firebaseObject) {
        // this.awesomeThings = [
        //     'HTML5 Boilerplate',
        //     'AngularJS',
        //     'Karma'
        // ];

        var ref = new Firebase('https://sweltering-fire-7706.firebaseio.com');
        var vm = this;
        vm.profile = $firebaseObject(ref);


        // Array to put final object in
        vm.weeks = [];

        // templates

        vm.template = {
            'general': 'views/templates/general.tpl.html'
        }

        // configuration
        var startDate = Date.UTC(1989, 8, 18);
        var weekLength = 6.048e+8;
        var yearLength = 31449600000;
        var endDate = Date.UTC(2089, 8, 19);
        vm.mathFloor = Math.floor;

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
        var birthdayWeeks = [0, 52, 104, 157, 209, 261, 313, 365, 418, 470, 522, 574, 626, 678, 731, 783, 835, 887, 939, 992, 1044, 1096, 1148, 1200, 1252, 1305, 1357, 1409, 1461, 1513, 1565, 1618, 1670, 1722, 1774, 1826, 1879, 1931, 1983, 2035, 2087, 2139, 2192, 2244, 2296, 2348, 2400, 2453, 2505, 2557, 2609, 2661, 2713, 2766, 2818, 2870, 2922, 2974, 3026, 3079, 3131, 3183, 3235, 3287, 3340, 3392, 3444, 3496, 3548, 3600, 3653, 3705, 3757, 3809, 3861, 3914, 3966, 4018, 4070, 4122, 4174, 4227, 4279, 4331, 4383, 4435, 4487, 4540, 4592, 4644, 4696, 4748, 4801, 4853, 4905, 4957, 5009, 5061, 5114, 5166, 5218];

        for(var i = 0; i < birthdayWeeks.length; i++){
            vm.weeks[birthdayWeeks[i]].class.push('birthday');
            vm.weeks[birthdayWeeks[i]].value = i;
            vm.weeks[birthdayWeeks[i]].template = 'views/templates/birthday.tpl.html';
        }

        // find my current age
        var birthDate = new Date(1989, 9, 21);
        var now = new Date();
        var days = Math.floor((now - birthDate) / 86400000);
        var myAge = days / 365.25;
        vm.myAge = Math.floor(myAge);

        // life expectancy
        vm.weeks[4122].class.push('life-expectancy');
        vm.weeks[4122].description = 'Life expectancy.';

        for(var i = 4123; i < vm.weeks.length; i++){
            vm.weeks[i].class.push('after-life');
        }

        // life events
        vm.weeks[302].class.push('life-event');
        vm.weeks[302].description = "Moved to Kennett, MO."

        vm.weeks[511].class.push('life-event');
        vm.weeks[511].description = "Moved to Lawrence, KS."

        vm.weeks[1246].class.push('life-event');
        vm.weeks[1246].description = "Moved to Chicago, IL."

        // school
        vm.weeks[975].class.push('school');
        vm.weeks[975].description = "Graduated from Lawrence High School."

        vm.weeks[988].class.push('school');
        vm.weeks[988].description = "Started at KU as a Music Education major."

        vm.weeks[1011].class.push('school');
        vm.weeks[1011].description = "Switched major to Human Biology."

        vm.weeks[1151].class.push('school');
        vm.weeks[1151].description = "Began genetics research."

        vm.weeks[1183].class.push('school');
        vm.weeks[1183].description = "Graduated from KU."

        vm.weeks[1223].class.push('school');
        vm.weeks[1223].description = "Began herpetology research."

        // careers
        vm.weeks[1189].class.push('career');
        vm.weeks[1189].description = "First day as an admissions rep for KU."

        vm.weeks[1364].class.push('career');
        vm.weeks[1364].description = "First day as a developer at RightPoint."

        // world event
        vm.weeks[537].class.push('world-event');
        vm.weeks[537].description = "Y2K happened."

        vm.weeks[625].class.push('world-event');
        vm.weeks[625].description = "9/11 happened."

        vm.weeks[924].class.push('world-event');
        vm.weeks[924].description = "First iPhone is released."

        vm.weeks[967].class.push('world-event');
        vm.weeks[967].description = "KU wins the National Championship in basketball."

        // projects
        vm.weeks[1279].class.push('projects');
        vm.weeks[1279].description = "First day at Apple."

        vm.weeks[1353].class.push('projects');
        vm.weeks[1353].description = "First day as an advisor at Codecademy."

        vm.weeks[1333].class.push('projects');
        vm.weeks[1333].description = "Finished developer bootcamp. Launched TacoTime."

        vm.weeks[1372].class.push('projects');
        vm.weeks[1372].description = "Launched givvy.com."
    }]);
