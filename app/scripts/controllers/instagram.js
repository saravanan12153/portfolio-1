'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
    .controller('InstagramCtrl', ['instagram', function(instagram) {

        var vm = this;
        vm.breakPoint = 767;

        // Adds slight rotation to photos object
        var rotateDegrees = [ -1.5, -1, 1, 1.5 ];

        vm.hello = "hello there";

        function randomNumber() {
            var result =  Math.floor(Math.random() * rotateDegrees.length);
            return rotateDegrees[result];
        }

        // Get photos from instagram API
        instagram.then(function(data){
            var response = data.data.data;

            vm.instagramPhotos = [];

            response.forEach(function(photo){
                vm.instagramPhotos.push({
                    'image': photo.images.standard_resolution.url,
                    'caption': photo.caption.text,
                    'rotate': randomNumber(),
                    'link': photo.link,
                    'created_time': (photo.created_time * 1000)
                });
            });
        });
    }]);