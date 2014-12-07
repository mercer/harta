"use strict";angular.module("hartaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hartaApp").controller("MainCtrl",["$scope",function(){function a(a){return new L.OverPassLayer({query:"https://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)"+a.query+";out;",callback:function(b){for(var c=0;c<b.elements.length;c++){var d=b.elements[c];if(d.id in this.instance._ids)return;this.instance._ids[d.id]=!0;var e=new L.LatLng(d.lat,d.lon),f=L.icon({iconUrl:"images/icons/"+a.icon,iconSize:[32,32]});L.marker(e,{icon:f}).addTo(this.instance)}}})}angular.element(document).ready(function(){var b=[{query:'[amenity=pharmacy][opening_hours="24/7"]',icon:"Map_symbol-pin.svg"}],c='Map data &copy; <a href="https://openstreetmap.org/">OpenStreetMap</a> contributors',d='POI via <a href="https://www.overpass-api.de/">Overpass API</a>',e=new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{opacity:.7,attribution:[c,d].join(", ")}),f=new L.Map("map").addLayer(e).setView(new L.LatLng(44.4358,26.1013),15),g=a(b[0]);f.addLayer(g)})}]),angular.module("hartaApp").controller("AboutCtrl",["$scope",function(){}]);