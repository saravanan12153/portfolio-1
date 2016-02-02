'use strict';

angular.module('desktopApp')
	.factory('info', function() {

	//TODO: make $http.get call to external JSON.
    var data = {
        avatar: "images/Jon_Samp_SF.png",
        name: "Jon Samp",
        location: "Chicago, IL",
        work: [{
            "position": "AngularJS Developer",
            "organization": "Rightpoint",
            "url": "http://www.rightpoint.com/",
        }, {
            "position": "Pro Advisor",
            "organization": "Codecademy",
            "url": "https://www.codecademy.com/",
        }, {
            "position": "Co-founder",
            "organization": "Givvy",
            "url": "http://givvyapp.com/",
        }],
        socialIcons: [{
            "name": "Github",
            "icon": "fa-github-alt",
            "url": "https://github.com/jonsamp"
        }, {
            "name": "Medium",
            "icon": "fa-rss",
            "url": "https://medium.com/@jonsamp"
        }]
    };

    return data;

});
