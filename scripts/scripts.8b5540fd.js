"use strict";angular.module("desktopApp",["ngRoute","ngSanitize","ngTouch","ui.bootstrap","rzModule"]).config(["$routeProvider","$sceDelegateProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/responsive",{templateUrl:"views/responsive.html",controller:"ResponsiveCtrl",controllerAs:"vm"}).when("/coffee",{templateUrl:"views/coffee.html",controller:"CoffeeCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"}),b.resourceUrlWhitelist(["self","https://scontent.cdninstagram.com/**","https://s3.amazonaws.com/**"])}]).filter("secondsToDateTime",[function(){return function(a){return new Date(1970,0,1).setSeconds(a)}}]),angular.module("desktopApp").factory("portfolioData",["$http",function(a){var b="https://s3.amazonaws.com/jon-samp-portfolio/lifeWeeks.min.json";return a.get(b).then(function(a,b,c,d){return a.data.weeks})["catch"](function(a){console.log("Error: ",a)})}]),angular.module("desktopApp").factory("instagram",["$http",function(a){return a.jsonp("https://api.instagram.com/v1/users/self/media/recent/?access_token=17942230.e281b92.8252eb3acca645b5a37b86388ee59137&callback=JSON_CALLBACK&count=3").success(function(a){return a.data})}]),angular.module("desktopApp").controller("MainCtrl",["portfolioData",function(a){var b=this;b.profile={avatar:"images/Jon_Samp_SF_zoomed.jpg",name:"Jon Samp",description:"I'm a front-end developer in Chicago. I like photography, love coffee, and am about to get a dog.",socialIcons:[{name:"Github",icon:"fa-github",url:"https://github.com/jonsamp"},{name:"Codepen",icon:"fa-codepen",url:"http://codepen.io/jonsamp/"},{name:"Medium",icon:"fa-medium",url:"https://medium.com/@jonsamp"},{name:"Twitter",icon:"fa-twitter",url:"https://twitter.com/jonsamp"}]},b.breakPoint=767,b.projects={responsive:{name:"Responserator",url:"http://jon-samp.com/#/responsive",background:"blue-gradient",image:"images/responsive.svg",description:"@media queries made easy."},tacotime:{name:"Taco Time",url:"http://jonsamp.github.io/TacoTime",background:"red-gradient",image:"images/tacotime.png",imageClass:"taco",description:"Find the closest taco place."},givvy:{name:"Givvy",url:"http://givvyapp.com",background:"green-gradient",image:"images/givvy.svg",description:"Recommendations from friends."}}}]),angular.module("desktopApp").controller("LifeWeek",["portfolioData",function(a){var b=this;b.breakPoint=1200;var c=new Date(1989,9,21),d=new Date,e=Math.floor((d-c)/864e5),f=e/365.25;b.myAge=Math.floor(f);var g=new Date,h=g.getMonth(),i=g.getDate()-g.getDay()+1,j=g.getYear()+1900,k=Date.UTC(j,h,i);a.then(function(a){for(var c=0,d=a.length;d>c;c++)a[c]["class"]?(a[c]["class"]+=" "+c.toString(),k>a[c].date?a[c]["class"]+=" past":k===a[c].date?(a[c]["class"]+=" thisWeek",a[c].description="This week."):a[c]["class"]+=" future",4122==a[c].id&&(a[c]["class"]+=" life-expectancy")):(k>a[c].date?a[c]["class"]="past":k===a[c].date?(a[c]["class"]="thisWeek",a[c].description="This week."):a[c]["class"]="future",a[c].id>=4123&&(a[c]["class"]+=" after-life"),a[c]["class"]+=" "+c.toString());b.weeks=a})}]),angular.module("desktopApp").directive("lifeWeek",function(){return{restrict:"E",scope:{weeks:"=",myAge:"=",windowWidth:"=",breakPoint:"="},templateUrl:"views/lifeWeek.html",link:function(a){a.mathFloor=Math.floor}}}),angular.module("desktopApp").controller("InstagramCtrl",["instagram","$sce",function(a,b){function c(){var a=Math.floor(Math.random()*e.length);return e[a]}var d=this;d.breakPoint=767;var e=[-1.5,-1,1,1.5];a.then(function(a){var b=a.data.data;d.instagramPhotos=[],b.forEach(function(a){d.instagramPhotos.push({image:a.images.low_resolution.url,location:a.location.name,caption:a.caption.text,rotate:c(),link:a.link,created_time:1e3*a.created_time})})})}]),angular.module("desktopApp").directive("resize",["$window",function(a){return function(b,c){var d=angular.element(a);b.getWindowDimensions=function(){return{h:d.height(),w:d.width()}},b.$watch(b.getWindowDimensions,function(a,c){b.windowHeight=a.h,b.windowWidth=a.w;var d=b.windowWidth.toString().split("");b.rgbaColor=d[0]+d[0]+", "+d[1]+d[1]+", "+d[2]+d[2],b.style=function(){return{height:a.h-100+"px",width:a.w-100+"px"}}},!0),d.bind("resize",function(){b.$apply()})}}]),angular.module("desktopApp").controller("ResponsiveCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("desktopApp").controller("CoffeeCtrl",["$interval",function(a){function b(){$.ajax({url:"https://api.forecast.io/forecast/a0851d6b87a2a541d0fbaff2d0f7518b/41.9035690,-87.6715350",dataType:"JSONP",jsonpCallback:"callback",type:"GET",success:function(a){console.log(a),d.icon="images/weather_icons/"+a.currently.icon+".svg",d.temp=a.currently.temperature,d.summary=a.minutely.summary;var b=a.currently.icon;setWeatherBg(b)}})}function c(){var a=new Date,b=a.getHours(),c=a.getMinutes();10>c&&(c="0"+c);var e=b+":"+c;b>11?(e=b-12+":"+c,e+=" PM",12==b&&(e="12:"+c,e+=" PM")):0===b?e="12:"+c+"AM":e+="AM",d.currentTime=e}this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var d=this;b(),a(b,3e5),d.sliderValue=10,d.bloomGrams=2*d.sliderValue,d.pourGrams=16*d.sliderValue,d.halfPour=d.pourGrams/2,d.gramSlider={value:10,options:{floor:10,ceil:40,hideLimitLabels:!0,onChange:function(a,b,c,e){d.sliderValue=b,d.bloomGrams=2*b,d.pourGrams=16*b,d.halfPour=d.pourGrams/2}}};var e=60,f=165;d.bloomCounter=e,d.pourCounter=f;var g=0,h=0;d.isDisabled=!1;var i,j;d.startBloomTimer=function(){d.isDisabled=!0,i=a(function(){d.bloomCounter--,g+=1;var b=g/e*100;d.percentBloom=b,0===d.bloomCounter&&($(".timer").first().css("background-color","#E84228"),d.startPourTimer(),a.cancel(i))},1e3)},d.startPourTimer=function(){j=a(function(){d.pourCounter--,h+=1;var b=h/f*100;d.percentPour=b,0===d.pourCounter&&(d.isDisabled=!1,d.bloomCounter=60,$(".timer").first().css("background-color","#333"),d.pourCounter=225-d.bloomCounter,g=0,h=0,d.percentPour=0,d.percentBloom=0,$(".percent-bar").css("width","0%"),a.cancel(j))},1e3)},d.stopTimer=function(){a.cancel(i),a.cancel(j),g=0,h=0,d.percentPour=0,d.percentBloom=0,d.bloomCounter=60,d.pourCounter=225-d.bloomCounter,d.isDisabled=!1,$(".percent-bar").css("width","0%"),$(".timer").first().css("background-color","#333")},a(c,1e3),c(),d.reload=function(){window.location.reload()}}]),angular.module("desktopApp").factory("swarm",["$http",function(a){return a.get("https://api.foursquare.com/v2/users/self/checkins?oauth_token=EFSXKQ40LUQDHXBOIVCOZ3X0ABEDIG541KQYW2BNUCPEIRLY&v=20160616&m=swarm").success(function(a){return a.response.checkins.items})}]),angular.module("desktopApp").controller("SwarmCtrl",["swarm",function(a){var b=this;b.breakPoint=767,a.then(function(a){var c=a.data.response.checkins.items;b.data=c})}]),angular.module("desktopApp").directive("project",function(){return{templateUrl:"views/project.html",restrict:"E",scope:{project:"="}}}),angular.module("desktopApp").run(["$templateCache",function(a){a.put("views/coffee.html",'<div class="raspi-app"> <div class="info-bar"> <span class="time" ng-click="vm.reload()"> {{ vm.currentTime }} </span> <div class="weather-widget"> {{ vm.temp | number: 0 }}° {{ vm.summary }} </div> </div> <!-- <div class="weather-pane" style="{{ vm.bgGradient }}">\n\n        <div class="weather-icon">\n            <img ng-src="{{ vm.icon }}" />\n        </div>\n\n        <div class="temp" style="{{ vm.color }}">{{ vm.temp | number: 0 }}°</div>\n        <div class="condition" style="{{ vm.color }}">{{ vm.summary }}</div>\n\n    </div> --> <div class="coffee-pane"> <div class="gram-slider"> <rzslider rz-slider-model="vm.gramSlider.value" rz-slider-options="vm.gramSlider.options" class="with-legend"></rzslider> <div class="grams">{{ vm.sliderValue }}g</div> </div> <div class="step"> <div class="title"> <h3>Bloom: {{ vm.bloomGrams }}g</h3> <div class="progress-bar"> <div class="percent-bar" style="width: {{ vm.percentBloom }}%"></div> </div> </div> <div class="timer"> {{ vm.bloomCounter | secondsToDateTime | date: \'mm:ss\' }} </div> </div> <div class="step"> <div class="title"> <h3>Pour: {{ vm.halfPour }}g, {{ vm.pourGrams }}g</h3> <div class="progress-bar"> <div class="percent-bar" style="width: {{ vm.percentPour }}%"></div> </div> </div> <div class="timer"> {{vm.pourCounter | secondsToDateTime | date: \'mm:ss\'}} </div> </div> <button ng-click="vm.startBloomTimer()" class="btn btn-lg btn-primary" ng-disabled="vm.isDisabled">{{ vm.isDisabled ? "Currently Brewing" : "Begin Pour Over" }}</button> <button ng-click="vm.stopTimer()" class="btn btn-lg btn-primary btn-reset" ng-if="vm.isDisabled">Reset</button> </div> </div>'),a.put("views/lifeWeek.html",'<div class="header"> <p class="pull-left" style="color: white">Life by week:</p> </div> <div class="all-weeks" ng-if="windowWidth >= breakPoint"> <div ng-repeat="week in weeks track by week.id" class="week-wrapper"> <div ng-if="week.desc"> <div class="sq {{week.class}}" uib-popover-template="week.tpl" popover-trigger="mouseenter"></div> </div> <div ng-if="!week.desc"> <div class="sq {{week.class}}"></div> </div> </div> </div> <div class="clearfix"></div> <div class="small-weeks" ng-if="windowWidth < breakPoint"> <div ng-repeat="week in weeks | filter: { nE: true} | orderBy: id | limitTo: -5 track by week.id"> <div class="week-entry"> <span class="date {{week.class}}">{{ week.date | date: \'MMMM yyyy\' }}</span><br> <span class="desc">{{ week.desc }}</span> </div> </div> </div>'),a.put("views/main.html",'<div ng-controller="MainCtrl as vm" class="main" resize> <div class="content-container"> <nav> <div class="left-nav"> <img ng-src="{{vm.profile.avatar}}"> <span class="name" ng-if="windowWidth >= vm.breakPoint ">{{ vm.profile.name }}</span> </div> <div class="social-media"> <ul> <li ng-repeat="key in vm.profile.socialIcons"> <a href="{{key.url}}" target="new"><i class="fa fa-lg social-media-icon" ng-class="key.icon"></i></a> </li> </ul> </div> </nav> </div> <div class="content-container"> <div class="about-me"> <h3> {{ vm.profile.description }} </h3> </div> </div> <div class="content-container"> <div class="header"> <p>Projects:</p> </div> <div class="dev-projects"> <project project="vm.projects.responsive"></project> <project project="vm.projects.tacotime"></project> <project project="vm.projects.givvy"></project> </div> </div> <div class="instagram" ng-controller="InstagramCtrl as vm"> <div class="content-container"> <div class="header"> <p>Photography:</p> </div> <div class="instagram-container"> <div ng-if="windowWidth >= vm.breakPoint" ng-repeat="photo in vm.instagramPhotos"> <a ng-href="{{photo.link}}" target="new"> <div class="photo" style="transform: rotate( {{ photo.rotate }}deg)"> <div ng-if="!photo.video"> <img ng-src="{{photo.image}}"> </div> <div ng-if="photo.video"> <video autoplay loop src="{{photo.video}}"></video> </div> <p> {{ photo.created_time | date: \'MMM dd, yyyy\' }} <span ng-if="photo.location">@ {{ photo.location }}</span> <br> {{ photo.caption }} <br> </p> </div> </a> </div> <div ng-if="windowWidth < vm.breakPoint" ng-repeat="photo in vm.instagramPhotos | limitTo: 1"> <a ng-href="{{photo.link}}" target="new"> <div class="photo" style="transform: rotate( {{ photo.rotate }}deg)"> <div ng-if="!photo.video"> <img ng-src="{{photo.image}}"> </div> <div ng-if="photo.video"> <video autoplay loop src="{{photo.video}}"></video> </div> <p> {{ photo.created_time | date: \'MMM dd, yyyy\' }} <span ng-if="photo.location">@ {{ photo.location }}</span> <br> {{ photo.caption }} </p> </div> </a> </div> </div> </div> </div> <div class="swarm" ng-controller="SwarmCtrl as vm"> <div class="content-container"> <div class="header"> <p>Recently seen at:</p> </div> <div class="checkinContainer"> <div ng-if="windowWidth >= vm.breakPoint" ng-repeat="place in vm.data | limitTo: 3"> <div class="checkin"> <div ng-if="place.sticker.image.name" class="checkin-marker"> <img ng-src="{{place.sticker.image.prefix}}60{{place.sticker.image.name}}"> </div> <div ng-if="!place.sticker.image.name" class="checkin-marker"> <i class="fa fa-map-pin" aria-hidden="true"></i> </div> <div> <div class="name"> {{ place.venue.name }} </div> <div class="category"> {{ place.venue.categories[0].name }} </div> </div> </div> </div> <div ng-if="windowWidth < vm.breakPoint" ng-repeat="place in vm.data | limitTo: 1"> <div class="checkin"> <div ng-if="place.sticker.image.name" class="checkin-marker"> <img ng-src="{{place.sticker.image.prefix}}60{{place.sticker.image.name}}"> </div> <div ng-if="!place.sticker.image.name" class="checkin-marker"> <i class="fa fa-map-pin" aria-hidden="true"></i> </div> <div> <div class="name"> {{ place.venue.name }} </div> <div class="category"> {{ place.venue.categories[0].name }} </div> </div> </div> </div> </div> </div> </div> <div class="life-week-container" ng-controller="LifeWeek as vm"> <div class="content-container"> <life-week weeks="vm.weeks" my-age="vm.myAge" window-width="windowWidth" break-point="vm.breakPoint"></life-week> </div> </div> </div>'),a.put("views/project.html",'<a ng-href="{{project.url}}" target="new"> <div class="project-card" ng-class="project.background"> <div class="app-logo"> <img ng-src="{{ project.image }}" ng-class="project.imageClass"> </div> <div class="project-name"> {{ project.name }} </div> <div class="project-description"> {{ project.description }} </div> </div> </a>'),a.put("views/responsive.html",'<div class="responsive" resize> <div class="measurements" style="background: linear-gradient(to top, rgba({{rgbaColor}}, 1), rgba({{rgbaColor}}, 0.95))"> <div class="value"> <h1>{{ windowWidth }}<span class="px">px</span></h1> <p> Width </p> </div> <div class="value"> <h1>{{ windowHeight }}<span class="px">px</span></h1> <p> Height </p> </div> </div> <div class="css"> <div class="code-snippet"> <p> {{ windowWidth }}px and smaller </p> <span class="media">@media</span> (max-width: <span class="width">{{ windowWidth }}px</span>) {<br><br> } </div> <div class="code-snippet"> <p> {{ windowWidth }}px and wider </p> <span class="media">@media</span> (min-width: <span class="width">{{ windowWidth }}px</span>) {<br><br> } </div> </div> <div class="what-is-this"> <p> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="new">Learn more about media queries --></a> </p> </div> </div>'),a.put("views/templates/birthday.tpl.html",'<div> {{ week.date | date:\'MMM yyyy\' }} <span ng-if="$index === 0"> <br>I was born! </span> <span ng-if="mathFloor($index / 52) !== 0 && mathFloor($index / 52) <= myAge"> <br>I turned {{ ($index / 52) | number: 0 }}. </span> <span ng-if="mathFloor($index / 52) !== 0 && mathFloor($index / 52) > myAge"> <br>I will turn {{ ($index / 52) | number: 0}}. <span ng-if="week.desc"> <br>{{ week.desc }} </span> </span> </div>'),a.put("views/templates/general.tpl.html","<div> {{ week.date | date:'MMM yyyy' }}<br> {{ week.desc }} </div>")}]);