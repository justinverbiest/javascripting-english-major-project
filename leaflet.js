var firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
    firstMap.setView([40.6896, -73.9223], 16);
    var BedStuyBrooklyn, BedStuy,BrooklynMarker;
var tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
BedStuyBrooklyn = L.latLng(40.6896, -73.9223);
BedStuyBrooklynMarker = L.marker(BedStuyBrooklyn).addTo(firstMap);
