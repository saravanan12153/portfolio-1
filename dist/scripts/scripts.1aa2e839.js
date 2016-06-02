"use strict";angular.module("desktopApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","timer"]).config(["$routeProvider","$sceDelegateProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/responsive",{templateUrl:"views/responsive.html",controller:"ResponsiveCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"}),b.resourceUrlWhitelist(["self","https://scontent.cdninstagram.com/**"])}]),angular.module("desktopApp").service("portfolioData",function(){return{avatar:"images/Jon_Samp_SF_zoomed.jpg",name:"Jon Samp",location:"Chicago, IL",work:[{position:"AngularJS Developer @",organization:"Rightpoint",url:"http://www.rightpoint.com/"},{position:"Pro Advisor @",organization:"Codecademy",url:"https://www.codecademy.com/"}],projects:[{name:"Givvy",url:"http://givvyapp.com"},{name:"TacoTime",url:"http://people.ku.edu/~sampjon/tacotime/#/"}],socialIcons:[{name:"Github",icon:"fa-github",url:"https://github.com/jonsamp"},{name:"Codepen",icon:"fa-codepen",url:"http://codepen.io/jonsamp/"},{name:"Medium",icon:"fa-medium",url:"https://medium.com/@jonsamp"},{name:"Twitter",icon:"fa-twitter",url:"https://twitter.com/jonsamp"}],lifeWeeks:{birthdayWeeks:[0,52,104,157,209,261,313,365,418,470,522,574,626,678,731,783,835,887,939,992,1044,1096,1148,1200,1252,1305,1357,1409,1461,1513,1565,1618,1670,1722,1774,1826,1879,1931,1983,2035,2087,2139,2192,2244,2296,2348,2400,2453,2505,2557,2609,2661,2713,2766,2818,2870,2922,2974,3026,3079,3131,3183,3235,3287,3340,3392,3444,3496,3548,3600,3653,3705,3757,3809,3861,3914,3966,4018,4070,4122,4174,4227,4279,4331,4383,4435,4487,4540,4592,4644,4696,4748,4801,4853,4905,4957,5009,5061,5114,5166,5218],events:[{id:4122,"class":"life-expectancy",description:"Life expectancy."},{id:302,"class":"life-event",description:"Moved to Kennettt, MO."},{id:511,"class":"life-event",description:"Moved to Lawrence, KS."},{id:1246,"class":"life-event",description:"Moved to Chicago, IL."},{id:975,"class":"school",description:"Graduated from Lawrence High School."},{id:988,"class":"school",description:"Started at KU as a Music Education major."},{id:1011,"class":"school",description:"Switched major to Human Biology."},{id:1151,"class":"school",description:"Began genetics research."},{id:1183,"class":"school",description:"Graduated from KU."},{id:1223,"class":"school",description:"Began herpetology research."},{id:1189,"class":"career",description:"First day as an admissions rep for KU."},{id:1364,"class":"career",description:"First day as a developer at RightPoint."},{id:537,"class":"world-event",description:"Y2K happened."},{id:625,"class":"world-event",description:"9/11 happened."},{id:924,"class":"world-event",description:"First iPhone released."},{id:967,"class":"world-event",description:"KU wins the National Championship in basketball."},{id:1279,"class":"projects",description:"First day at Apple."},{id:1353,"class":"projects",description:"First day as an advisor at Codecademy."},{id:1333,"class":"projects",description:"Graduated from Codecademy Labs Developer Bootcamp. Made TacoTime."},{id:1372,"class":"projects",description:"Launched givvy.com."},{id:1295,"class":"misc",description:"Ran my first half marathon."},{id:1082,"class":"misc",description:"Studied abroad in Florence, Italy."},{id:1166,"class":"misc",description:"Chartered Alpha Tau Omega."},{id:917,"class":"misc",description:"First time on a plane. Went to National History Day in Washington DC."}]}}}),angular.module("desktopApp").factory("instagram",["$http",function(a){return a.jsonp("https://api.instagram.com/v1/users/self/media/recent/?access_token=17942230.e281b92.8252eb3acca645b5a37b86388ee59137&callback=JSON_CALLBACK&count=3").success(function(a){return a.data})}]),angular.module("desktopApp").controller("MainCtrl",["portfolioData",function(a){var b=this;b.profile=a,b.breakPoint=767}]),angular.module("desktopApp").controller("LifeWeek",["portfolioData","instagram",function(a,b){var c=this;c.breakPoint=1200;var d=a.lifeWeeks;c.weeks=[];for(var e=Date.UTC(1989,8,18),f=6048e5,g=Date.UTC(2089,8,19),h=[],i=e;g>=i;i+=f)h.push(i);c.weeks=h.map(function(a,b){return{id:b,date:a,type:"",description:"","class":[b],template:"views/templates/general.tpl.html",value:"",notableEvent:!1}});for(var j=new Date,k=j.getMonth(),l=j.getDate()-j.getDay()+1,m=j.getYear()+1900,n=Date.UTC(m,k,l),i=0;i<c.weeks.length;i++)n>c.weeks[i].date?c.weeks[i]["class"].push("past"):n===c.weeks[i].date?(c.weeks[i]["class"].push("thisWeek"),c.weeks[i].description="This week."):c.weeks[i]["class"].push("future");for(var i=0;i<d.birthdayWeeks.length;i++)c.weeks[d.birthdayWeeks[i]]["class"].push("birthday"),c.weeks[d.birthdayWeeks[i]].value=i,c.weeks[d.birthdayWeeks[i]].template="views/templates/birthday.tpl.html",c.weeks[d.birthdayWeeks[i]].description=" ";for(var i=4123;i<c.weeks.length;i++)c.weeks[i]["class"].push("after-life");var o=new Date(1989,9,21),p=new Date,q=Math.floor((p-o)/864e5),r=q/365.25;c.myAge=Math.floor(r),d.events.map(function(a){c.weeks[a.id]["class"].push(a["class"]),c.weeks[a.id].description=a.description,c.weeks[a.id].notableEvent=!0}),c.weeks[4122].notableEvent=!1}]),angular.module("desktopApp").directive("lifeWeek",function(){return{restrict:"E",scope:{weeks:"=",myAge:"=",windowWidth:"=",breakPoint:"="},templateUrl:"views/lifeWeek.html",link:function(a){a.mathFloor=Math.floor}}}),angular.module("desktopApp").controller("InstagramCtrl",["instagram","$sce",function(a,b){function c(){var a=Math.floor(Math.random()*e.length);return e[a]}var d=this;d.breakPoint=767;var e=[-1.5,-1,1,1.5];d.hello="hello there",a.then(function(a){var b=a.data.data;d.instagramPhotos=[],b.forEach(function(a){d.instagramPhotos.push({image:a.images.standard_resolution.url,caption:a.caption.text,rotate:c(),link:a.link,created_time:1e3*a.created_time,video:void 0===a.videos?"":a.videos.standard_resolution.url})})})}]),angular.module("desktopApp").directive("resize",["$window",function(a){return function(b,c){var d=angular.element(a);b.getWindowDimensions=function(){return{h:d.height(),w:d.width()}},b.$watch(b.getWindowDimensions,function(a,c){b.windowHeight=a.h,b.windowWidth=a.w;var d=b.windowWidth.toString().split("");b.rgbaColor=d[0]+d[0]+", "+d[1]+d[1]+", "+d[2]+d[2],b.style=function(){return{height:a.h-100+"px",width:a.w-100+"px"}}},!0),d.bind("resize",function(){b.$apply()})}}]),angular.module("desktopApp").controller("ResponsiveCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("desktopApp").run(["$templateCache",function(a){a.put("views/lifeWeek.html",'<div class="header"> <p class="pull-left" style="color: white">Milestones:</p> </div> <div class="all-weeks" ng-if="windowWidth >= breakPoint"> <div ng-repeat="week in weeks track by week.id" class="week-wrapper"> <div ng-if="week.description"> <div class="sq" ng-class="{{week.class}}" uib-popover-template="week.template" popover-trigger="mouseenter"></div> </div> <div ng-if="!week.description"> <div class="sq" ng-class="{{week.class}}"></div> </div> </div> </div> <div class="clearfix"></div> <div class="small-weeks" ng-if="windowWidth < breakPoint"> <div ng-repeat="week in weeks | filter: { notableEvent: true} | orderBy: id | limitTo: -5 track by week.id"> <div class="week-entry"> <span class="date {{week.class[week.class.length - 1]}}">{{ week.date | date: \'MMMM yyyy\' }}</span><br> <span class="description">{{ week.description }}</span> </div> </div> </div>'),a.put("views/main.html",'<div ng-controller="MainCtrl as vm" class="main" resize> <div class="content-container"> <nav> <div class="left-nav"> <img ng-src="{{vm.profile.avatar}}"> <span class="name" ng-if="windowWidth >= vm.breakPoint ">Jon Samp</span> </div> <div class="social-media"> <ul> <li ng-repeat="key in vm.profile.socialIcons"> <a href="{{key.url}}" target="new"><i class="fa fa-lg social-media-icon" ng-class="key.icon"></i></a> </li> </ul> </div> </nav> </div> <div class="content-container"> <div class="about-me"> <h3> I\'m a front-end developer in Chicago. I like photography, love coffee, and I am thinking about getting a dog. </h3> </div> </div> <div class="instagram" ng-controller="InstagramCtrl as vm"> <div class="content-container"> <div class="header"> <p>Photography:</p> </div> <div class="instagram-container"> <div ng-if="windowWidth >= vm.breakPoint" ng-repeat="photo in vm.instagramPhotos"> <a ng-href="{{photo.link}}" target="new"> <div class="photo" style="transform: rotate( {{ photo.rotate }}deg)"> <div ng-if="!photo.video"> <img ng-src="{{photo.image}}"> </div> <div ng-if="photo.video"> <video autoplay loop src="{{photo.video}}"></video> </div> <p> {{ photo.created_time | date: \'MMM dd, yyyy\' }}: {{ photo.caption }}<br> </p> </div> </a> </div> <div ng-if="windowWidth < vm.breakPoint" ng-repeat="photo in vm.instagramPhotos | limitTo: 1"> <a ng-href="{{photo.link}}" target="new"> <div class="photo" style="transform: rotate( {{ photo.rotate }}deg)"> <div ng-if="!photo.video"> <img ng-src="{{photo.image}}"> </div> <div ng-if="photo.video"> <video autoplay loop src="{{photo.video}}"></video> </div> <p> {{ photo.created_time | date: \'MMM dd, yyyy\' }}: {{ photo.caption }} </p> </div> </a> </div> </div> </div> </div> <div class="life-week-container" ng-controller="LifeWeek as vm"> <div class="content-container"> <life-week weeks="vm.weeks" my-age="vm.myAge" window-width="windowWidth" break-point="vm.breakPoint"></life-week> </div> </div> </div>'),a.put("views/responsive.html",'<div class="responsive" resize> <div class="measurements" style="background: linear-gradient(to top, rgba({{rgbaColor}}, 1), rgba({{rgbaColor}}, 0.95))"> <div class="value"> <h1>{{ windowWidth }}<span class="px">px</span></h1> <p> Width </p> </div> <div class="value"> <h1>{{ windowHeight }}<span class="px">px</span></h1> <p> Height </p> </div> </div> <div class="css"> <div class="code-snippet"> <p> {{ windowWidth }}px and smaller </p> <span class="media">@media</span> (max-width: <span class="width">{{ windowWidth }}px</span>) {<br><br> } </div> <div class="code-snippet"> <p> {{ windowWidth }}px and wider </p> <span class="media">@media</span> (min-width: <span class="width">{{ windowWidth }}px</span>) {<br><br> } </div> </div> <div class="what-is-this"> <p> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="new">Learn more about media queries --></a> </p> </div> </div>'),a.put("views/templates/birthday.tpl.html",'<div> {{ week.date | date:\'MMM yyyy\' }} <span ng-if="$index === 0"> <br>I was born! </span> <span ng-if="mathFloor($index / 52) !== 0 && mathFloor($index / 52) <= myAge"> <br>I turned {{ ($index / 52) | number: 0 }}. </span> <span ng-if="mathFloor($index / 52) !== 0 && mathFloor($index / 52) > myAge"> <br>I will turn {{ ($index / 52) | number: 0}}. <span ng-if="week.description"> <br>{{ week.description }} </span> </span> </div>'),a.put("views/templates/general.tpl.html","<div> {{ week.date | date:'MMM yyyy' }}<br> {{ week.description }} </div>")}]);