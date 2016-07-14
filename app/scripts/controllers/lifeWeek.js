'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('LifeWeek', ['portfolioData', function(portfolioData) {

        var vm = this;
        vm.breakPoint = 1200;

        // find my current age
        var birthDate = new Date(1989, 9, 21);
        var now = new Date();
        var days = Math.floor((now - birthDate) / 86400000);
        var myAge = days / 365.25;
        vm.myAge = Math.floor(myAge);

        // Figure out if the week is in the past or in the future
        // Get current week
        var today = new Date();
        var month = today.getMonth();

        // Used + 1 since the weeks start on Monday
        var startOfWeek = today.getDate() - today.getDay() + 1;
        var year = today.getYear() + 1900;
        var thisWeek = Date.UTC(year, month, startOfWeek);

        portfolioData.then(function(weeks){

          // Add classes for past, present, future
          for (var i = 0, len = weeks.length; i < len; i++) {

            if (weeks[i].class){
              weeks[i].class += ' ' + i.toString();
              if (thisWeek > weeks[i].date) {
                  weeks[i].class += ' past';
              } else if (thisWeek === weeks[i].date) {
                  weeks[i].class += ' thisWeek';
                  weeks[i].description = "This week.";
              } else {
                  weeks[i].class += ' future';
              }

              if (weeks[i].id == 4122){
                weeks[i].class += ' life-expectancy';
              }
            } else {
              if (thisWeek > weeks[i].date) {
                  weeks[i].class = 'past';
              } else if (thisWeek === weeks[i].date) {
                  weeks[i].class = 'thisWeek';
                  weeks[i].description = "This week.";
              } else {
                  weeks[i].class = 'future';
              }

              if (weeks[i].id >= 4123){
                weeks[i].class += ' after-life';
              }
              weeks[i].class += ' ' + i.toString();
            }
          }
          vm.weeks = weeks;
        });


        // $.ajax({
        //     url      : 'https://s3.amazonaws.com/jon-samp-portfolio/lifeWeeks.json',
        //     dataType : 'jsonp',
        //     success  : function (data) {
        //         console.log(data);
        //         for (var i = 0, len = data.length; i < len; i++) {
        //             //`data[i].something` will access the `something` property an index of the JSON returned
        //         }
        //     }
        // });
        //
        // var url = 'https://s3.amazonaws.com/jon-samp-portfolio/lifeWeeks.json';
        // $http.jsonp(url).then(function(data){
        //   console.log("data", data);
        // }).catch(function(err){
        //   console.log("error", err);
        // });
        //  portfolioData().then(function(data){ console.log("dataaa", data);});


        // var lifeWeeks = portfolioData.lifeWeeks;
        //
        // // Array to put final object in
        // vm.weeks = [];
        //
        // // configuration
        // var startDate = Date.UTC(1989, 8, 18);
        // var weekLength = 6.048e+8;
        // var yearLength = 31449600000;
        // var endDate = Date.UTC(2089, 8, 19);
        //
        // // List every week
        // var weeksArray = [];
        // for (var i = startDate; i <= endDate; i += weekLength) {
        //     weeksArray.push(i);
        // }
        //
        // // push the date to vm.weeks, and adds id
        // vm.weeks = weeksArray.map(function(week, index) {
        //     return {
        //         'id': index,
        //         'date': week,
        //         'type': '',
        //         'description': '',
        //         'class': [index],
        //         'template': 'views/templates/general.tpl.html',
        //         'value': '',
        //         'notableEvent': false
        //     };
        // });
        //
        // // Figure out if the week is in the past or in the future
        // // Get current week
        //

        //
        // // Add class for birthdays
        // for (var i = 0; i < lifeWeeks.birthdayWeeks.length; i++) {
        //     vm.weeks[lifeWeeks.birthdayWeeks[i]].class.push('birthday');
        //     vm.weeks[lifeWeeks.birthdayWeeks[i]].value = i;
        //     vm.weeks[lifeWeeks.birthdayWeeks[i]].template = 'views/templates/birthday.tpl.html';
        //     vm.weeks[lifeWeeks.birthdayWeeks[i]].description = ' ';
        // }
        //
        // // Adds color to weeks after life expectancy;
        // for (var i = 4123; i < vm.weeks.length; i++) {
        //     vm.weeks[i].class.push('after-life');
        // }
        //
        // // find my current age
        // var birthDate = new Date(1989, 9, 21);
        // var now = new Date();
        // var days = Math.floor((now - birthDate) / 86400000);
        // var myAge = days / 365.25;
        // vm.myAge = Math.floor(myAge);
        //
        // // Adds events to week calendar from lifeWeeks object
        // lifeWeeks.events.map(function(event) {
        //     vm.weeks[event.id].class.push(event.class);
        //     vm.weeks[event.id].description = event.description;
        //     vm.weeks[event.id].notableEvent = true;
        // });
        //
        // // Makes life expectancy not a part of notable events
        // vm.weeks[4122].notableEvent = false;
        //
        // console.log(JSON.stringify(vm.weeks));

    }]);
