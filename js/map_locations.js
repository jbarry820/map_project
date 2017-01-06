var map;
function initMap() {
	var home = {lat: 33.050945, lng: -87.715825}
	map = new google.maps.Map(document.getElementById('map'), {
	  center: home,
	  zoom: 8//,
	  //mapTypeId: 'terrain'
	});

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var marker = new google.maps.Marker({
	  position: home,
	  map: map
	});
	var markers = locations.map(function(location, i) {
	  return new google.maps.Marker({
	    position: location,
	    label: labels[i % labels.length]
	  });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    };

  	var locations = [
    	{lat: 33.162907, lng: -87.742864},
	    {lat: 33.165388, lng: -87.739671},
	    {lat: 33.154356, lng: -87.740085},
	    {lat: 33.162621, lng: -87.735356},
	    {lat: 33.170098, lng: -87.737866},
	    {lat: 33.198101, lng: -87.772925},
	    {lat: 33.157510, lng: -87.291977},
	    {lat: 33.103980, lng: -87.469994},
	    {lat: 33.072128, lng: -87.665066}
  	]
