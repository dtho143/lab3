var map = L.map('map').setView([37, -97], 4);

var baseMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


var goes = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_imagery_goes_time/MapServer/WMSServer", {
      layers: '1',
      format: 'image/png',
      transparent: true,
      attribution: "NOAA",
      opacity: 0.75
  }).addTo(map);

var radar = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: ""
}).addTo(map);

// Create an object with layers for each basemap
var baseLayers = {
    "Base Map": baseMap
};

var overlays = {
    "GOES IR": goes,
    "Radar": radar,
    "Lightning": lightning
};

L.control.layers(baseLayers, overlays).addTo(map);
