"use strict";angular.module("desktopApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("desktopApp").controller("MainCtrl",["$firebaseObject",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var b=new Firebase("https://sweltering-fire-7706.firebaseio.com"),c=this;c.profile=a(b)}]),angular.module("desktopApp").run(["$templateCache",function(a){a.put("views/main.html",'<div ng-controller="MainCtrl as vm" class="main"> <img class="avatar" ng-src="{{vm.profile.avatar}}" alt="Picture of Jon Samp in San Fransisco, next to Lombard St."> <h1>{{vm.profile.name}}</h1> <p><i class="fa fa-map-pin"></i> {{vm.profile.location}}</p> <div ng-repeat="job in vm.profile.work"> <p>{{job.position}} <a href="{{job.url}}" target="new">{{job.organization}}</a></p> </div> <div class="social-media"> <ul> <li ng-repeat="key in vm.profile.socialIcons"> <a href="{{key.url}}" target="new"><i class="fa fa-lg social-media-icon" ng-class="key.icon"></i></a> </li> </ul> </div> </div>')}]);