angular.module('desktopApp')
    .service('portfolioData', function() {
        return {
            "avatar": "images/Jon_Samp_SF_zoomed.jpg",
            "name": "Jon Samp",
            "location": "Chicago, IL",
            "work": [{
                "position": "AngularJS Developer @",
                "organization": "Rightpoint",
                "url": "http://www.rightpoint.com/"
            }, {
                "position": "Pro Advisor @",
                "organization": "Codecademy",
                "url": "https://www.codecademy.com/"
            }],
            "projects": [{
                "name": "Givvy",
                "url": "http://givvyapp.com"
            }, {
                "name": "TacoTime",
                "url": "http://people.ku.edu/~sampjon/tacotime/#/"
            }],
            "socialIcons": [{
                "name": "Github",
                "icon": "fa-github",
                "url": "https://github.com/jonsamp"
            }, {
                "name": "Codepen",
                "icon": "fa-codepen",
                "url": "http://codepen.io/jonsamp/"
            }, {
                "name": "Medium",
                "icon": "fa-medium",
                "url": "https://medium.com/@jonsamp"
            }, {
                "name": "Twitter",
                "icon": "fa-twitter",
                "url": "https://twitter.com/jonsamp"
            }],
            "lifeWeeks": {
                "birthdayWeeks": [0, 52, 104, 157, 209, 261, 313, 365, 418, 470, 522, 574, 626, 678, 731, 783, 835, 887, 939, 992, 1044, 1096, 1148, 1200, 1252, 1305, 1357, 1409, 1461, 1513, 1565, 1618, 1670, 1722, 1774, 1826, 1879, 1931, 1983, 2035, 2087, 2139, 2192, 2244, 2296, 2348, 2400, 2453, 2505, 2557, 2609, 2661, 2713, 2766, 2818, 2870, 2922, 2974, 3026, 3079, 3131, 3183, 3235, 3287, 3340, 3392, 3444, 3496, 3548, 3600, 3653, 3705, 3757, 3809, 3861, 3914, 3966, 4018, 4070, 4122, 4174, 4227, 4279, 4331, 4383, 4435, 4487, 4540, 4592, 4644, 4696, 4748, 4801, 4853, 4905, 4957, 5009, 5061, 5114, 5166, 5218],
                "events": [{
                        "id": 4122,
                        "class": "life-expectancy",
                        "description": "Life expectancy."
                    }, {
                        "id": 302,
                        "class": "life-event",
                        "description": "Moved to Kennettt, MO."
                    }, {
                        "id": 511,
                        "class": "life-event",
                        "description": "Moved to Lawrence, KS."
                    }, {
                        "id": 1246,
                        "class": "life-event",
                        "description": "Moved to Chicago, IL."
                    }, {
                        "id": 975,
                        "class": "school",
                        "description": "Graduated from Lawrence High School."
                    }, {
                        "id": 988,
                        "class": "school",
                        "description": "Started at KU as a Music Education major."
                    }, {
                        "id": 1011,
                        "class": "school",
                        "description": "Switched major to Human Biology."
                    }, {
                        "id": 1151,
                        "class": "school",
                        "description": "Began genetics research."
                    }, {
                        "id": 1183,
                        "class": "school",
                        "description": "Graduated from KU."
                    }, {
                        "id": 1223,
                        "class": "school",
                        "description": "Began herpetology research."
                    }, {
                        "id": 1189,
                        "class": "career",
                        "description": "First day as an admissions rep for KU."
                    }, {
                        "id": 1364,
                        "class": "career",
                        "description": "First day as a developer at RightPoint."
                    }, {
                        "id": 1364,
                        "class": "career",
                        "description": "First day as a developer at RightPoint."
                    }, {
                        "id": 537,
                        "class": "world-event",
                        "description": "Y2K happened."
                    }, {
                        "id": 625,
                        "class": "world-event",
                        "description": "9/11 happened."
                    }, {
                        "id": 924,
                        "class": "world-event",
                        "description": "First iPhone released."
                    }, {
                        "id": 967,
                        "class": "world-event",
                        "description": "KU wins the National Championship in basketball."
                    }, {
                        "id": 1279,
                        "class": "projects",
                        "description": "First day at Apple."
                    }, {
                        "id": 1353,
                        "class": "projects",
                        "description": "First day as an advisor at Codecademy."
                    }, {
                        "id": 1333,
                        "class": "projects",
                        "description": "Finished developer bootcamp. Launched TacoTime."
                    }, {
                        "id": 1372,
                        "class": "projects",
                        "description": "Launched givvy.com."
                    }, {
                        "id": 1295,
                        "class": "misc",
                        "description": "Ran my first half marathon."
                    }, {
                        "id": 1082,
                        "class": "misc",
                        "description": "Studied abroad in Florence, Italy."
                    }, {
                        "id": 1166,
                        "class": "misc",
                        "description": "Chartered Alpha Tau Omega."
                    }, {
                        "id": 917,
                        "class": "misc",
                        "description": "First time on a plane. Went to National History Day in Washington DC."
                    }
                ]
            }
        };
    });
