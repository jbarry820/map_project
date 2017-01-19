var map;
var markers = [];
function initMap() {

	var home = new google.maps.LatLng(33.050945,-87.715825);
	//var home = new google.maps.LatLng(2.8,-187.3);
	map = new google.maps.Map(document.getElementById('map'), {
	  center: home,
	  zoom: 11//,
	  //zoom: 2
	  //mapTypeId: 'terrain'
	});


	// Create the function to handle the apiary data
	window.handle_apiary_data = function(data) {
	  //var arr = []
	  var arr = ko.observableArray([]);
	  for (var i=0; i<data.length; i++)
	  {
	    var h = data[i];
	    var a = ko.mapping.fromJS(h);
	    arr.push(a);

	    // Place a marker for the apiary
	    var latLng = new google.maps.LatLng(h.latitude, h.longitude);
	    var marker = new google.maps.Marker({ position: latLng, map: map });
	    markers.push(marker);
	  }
	  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
	  ko.applyBindings({ apiaries: arr });
  	};

  	// Now add a script tag to add the data
  	var script = document.createElement('script');
	script.src = 'js/apiary_data_jsonp.js';
	document.getElementsByTagName('head')[0].appendChild(script);

	document.getElementById('show-apiaries').addEventListener('click', showApiaries);
    document.getElementById('hide-apiaries').addEventListener('click', hideApiaries);

}

function showApiaries() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
 }

// This function will loop through the listings and hide them all.
function hideApiaries() {
	for (var i = 0; i < markers.length; i++) {
	  markers[i].setMap(null);
	}
}
