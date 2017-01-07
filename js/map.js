var map;
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
	  var markers = [];
	  var arr = []
	  for (var i=0; i<data.length; i++)
	  {
	    var h = data[i];	       
	    var a = ko.mapping.fromJS(h);
	    arr.push(a);
	    
	    // Place a marker for the apiary		
	    var latLng = new google.maps.LatLng(h.latitude, h.longitude);
	    var marker = new google.maps.Marker({ position: latLng, map: map });
	    markers.push(marker);
	  };
	  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });	  
	  ko.applyBindings({ apiaries: arr });        
  };
  
  // Now add a script tag to add the data  
  var script = document.createElement('script');		
	script.src = 'js/apiary_data_jsonp.js';
	document.getElementsByTagName('head')[0].appendChild(script);

}
	