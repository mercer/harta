'use strict';

angular.module('hartaApp')
  .controller('MainCtrl', function ($scope) {
    function fetchNewLayer(category) {
      return new L.OverPassLayer({
        query: 'https://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)' + category.query + ';out;',
        callback: function (data) {
          for (var i = 0; i < data.elements.length; i++) {
            var e = data.elements[i];

            if (e.id in this.instance._ids) {
              return;
            }
            this.instance._ids[e.id] = true;
            var pos = new L.LatLng(e.lat, e.lon);
            var myIcon = L.icon({
              iconUrl: 'images/icons/' + category.icon,
              iconSize: [32, 32]
            });
            L.marker(pos, {icon: myIcon}).addTo(this.instance);
          }
        }
      });
    }

    angular.element(document).ready(function () {
      var categories = [
        //{name: 'tourism=museum', icon: 'envelope.jpg'},
        //{name: 'amenity=drinking_water', icon: 'envelope.jpg'},
        {query: '[amenity=pharmacy][opening_hours="24/7"]', icon: 'Map_symbol-pin.svg'}
      ];
      var attrOsm = 'Map data &copy; <a href="https://openstreetmap.org/">OpenStreetMap</a> contributors',
        attrOverpass = 'POI via <a href="https://www.overpass-api.de/">Overpass API</a>';
      var osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        attribution: [attrOsm, attrOverpass].join(', ')
      });
      var map = new L.Map('map').addLayer(osm).setView(new L.LatLng(44.4358, 26.1013), 15);

      var pharmacy = fetchNewLayer(categories[0]);
      map.addLayer(pharmacy);
    });

  });