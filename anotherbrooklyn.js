var md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
var map, tileLayer;
map = L.map("could-be-map").setView([40.730833, -73.9975], 16);
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
$.getJSON("https://the-javascripting-english-major.org/could-be.geo.json", function(data){
  var couldBeLayer, couldBeFeatures;
  couldBeFeatures = data.features.map(function(feature){
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){
    var popupContent, lines;
    popupContent = "<h4>" + feature.name + "</h4>";
    if (feature.lines.length > 1){
      lines = "lines " + feature.lines.join(" and ");
    } else {
      lines = "line " + feature.lines[0];
    }
    popupContent = popupContent + "<p>" + feature.name + " is mentioned on " + lines + ".<br />";
    popupContent = popupContent + "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.</p>";
    return L.circleMarker(feature.latLng, {
      radius: 10 * Math.sqrt(feature.mentions),
      color: "#d33682",
      fillColor: "#d33682"
      }).bindPopup(popupContent);
    })
  ).addTo(map);
  loadPoem(couldBeFeatures);
  loadNavTabs(couldBeFeatures);
  map.fitBounds(couldBeLayer.getBounds());
  map.zoomOut(1);
});
var loadPoem, loadNavTabs;
loadPoem = function(featuresArray){
  $.ajax({
    url: "http:/Users/justinverbiest/github/javascripting-english-major-project/introduction.md",
    success: function(markdown){
      var html;
      html = md.render(markdown);
      $("#poem").html(html);
      featuresArray.forEach(function(feature){
        $("#poem").html(function(_, oldHtml){
          var regex, newHtml;
          regex = RegExp(feature.html, "g");
          newHtml = "<a href='#' data-tab='" +
            feature.tab +
            "' data-lat='" +
            feature.latLng.lat +
            "' data-lng='" +
            feature.latLng.lng +
            "'>" + feature.html + "</a>";
          return oldHtml.replace(regex, newHtml);
        });
        $("#nav-tabs a[href='#" + feature.tab + "']").click(function(){
          map.panTo(feature.latLng);
        });
      });
      $("#poem a").click(function(){
        var tab, lat, lng;
        tab = $( this ).data("tab");
        $("#nav-tabs a[href='#" + tab + "']").tab("show");
        lat = $( this ).data("lat");
        lng = $( this ).data("lng");
        map.panTo([lat, lng]);
      });
    }
  });
};
loadNavTabs = function(featuresArray){
  featuresArray.map(function(feature){
    return feature.tab;
  }).concat(["introduction"]).forEach(function(tab){
      $.ajax({
        url: "https://the-javascripting-english-major.org/examples/markdown/" + tab + ".md",
        success: function(markdown){
          var html;
          html = md.render(markdown);
          $("#" + tab).html(html);
        }
      });
  });
};
