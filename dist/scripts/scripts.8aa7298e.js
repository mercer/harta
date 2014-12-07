"use strict";angular.module("hartaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hartaApp").controller("MainCtrl",["$scope",function(a){function b(a){return new L.OverPassLayer({query:"http://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)["+a.name+"];out;",callback:function(b){for(var c=0;c<b.elements.length;c++){var d=b.elements[c];if(d.id in this.instance._ids)return;this.instance._ids[d.id]=!0;var e=new L.LatLng(d.lat,d.lon),f=L.icon({iconUrl:"images/"+a.icon,iconSize:[16,16]});L.marker(e,{icon:f}).addTo(this.instance)}}})}a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var c=[{name:"tourism=museum",icon:"envelope.jpg"},{name:"amenity=drinking_water",icon:"envelope.jpg"}],d='Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',e='POI via <a href="http://www.overpass-api.de/">Overpass API</a>',f=new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{opacity:.7,attribution:[d,e].join(", ")}),g=new L.Map("map").addLayer(f).setView(new L.LatLng(44.4358,26.1013),15),h=b(c[0]);g.addLayer(h);var i=b(c[1]);g.addLayer(i)}]),angular.module("hartaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);