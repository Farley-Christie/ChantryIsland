(function() {
	//i dont work in crome
	var map = new google.maps.Map(document.querySelector('.mapcon')), 
	marker,
	directionsService = new google.maps.DirectionsService,
    directionsRender = new google.maps.DirectionsRenderer({map: map});

	function initMap(position){
		map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
			map.setZoom(8);
			var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    		boat = new google.maps.LatLng(44.4999612, -81.3753353);

			startmarker = new google.maps.Marker({
				position : { lat: position.coords.latitude, lng: position.coords.longitude },
				map : map,
				title : "You are here"
			});
			boatmarker = new google.maps.Marker({
				position : { lat: 44.4999612, lng: -81.3753353},
				map : map,
				title : "86 Saugeen St. Southampton"
			});
			island = new google.maps.Marker({
				position : { lat: 44.4915901, lng: -81.3989065},
				map : map,
				title : "Chantry Island"
			});
			mapRoute(directionsService, directionsRender, start, boat);
	}
	function mapRoute(directionsService, directionsRender, start, boat) {
	  	directionsService.route({
	    	origin: start,
	    	destination: boat,
	    	travelMode: google.maps.TravelMode.DRIVING},
	    	function(response, status) {
			    if (status == google.maps.DirectionsStatus.OK) {
			      	directionsRender.setDirections(response);
			    } else {
			      	window.alert('Directions request failed due to ' + status);
			    }
  		});
	}
		//add custom animation for the marker 
	
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	}else{
		console.log("nope");
	}
	function handleError(){
		console.log('somthing went wrong');
	}
})();