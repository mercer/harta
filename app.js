function fetchNewLayer(category) { 
  return new L.OverPassLayer({
  query: "http://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)[" + category.name + "];out;",
  callback: function(data) {
    for (i = 0; i < data.elements.length; i++) {
      e = data.elements[i];

      if (e.id in this.instance._ids) return;
      this.instance._ids[e.id] = true;
      var pos = new L.LatLng(e.lat, e.lon);
      var myIcon = L.icon({
        iconUrl: category.icon,
        iconSize: [16, 16]
      });
      L.marker(pos, {icon: myIcon}).addTo(this.instance);
    }
  }
});
}

var categories = [{name: 'tourism=museum', icon: 'envelope.jpg'}, {name: 'amenity=drinking_water', icon: 'envelope.jpg'}];
var attr_osm = 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',
    attr_overpass = 'POI via <a href="http://www.overpass-api.de/">Overpass API</a>';
var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {opacity: 0.7, attribution: [attr_osm, attr_overpass].join(', ')});
var map = new L.Map('map').addLayer(osm).setView(new L.LatLng(44.4358, 26.1013), 15);

museums = fetchNewLayer(categories[0]);
map.addLayer(museums);

water = fetchNewLayer(categories[1]);
map.addLayer(water);
