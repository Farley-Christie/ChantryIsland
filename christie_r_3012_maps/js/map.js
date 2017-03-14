(function() {
	console.log("connect");
	var map = new google.maps.Map(document.querySelector('.mapcon')),

	googlemap = document.querySelector("#googlemap"),
	altmap = document.querySelector("#altmap"),

	geocoder = new google.maps.Geocoder(),

	currentLocal = document.querySelector('#directions1'),
	enteredLocal = document.querySelector('#directions2'),

	directionsServices = new google.maps.DirectionsService(),
	directionsDisplay,
	locations = [],

	hqicon = "images/hq.png",
	starticon = "images/start.png", 
	islandIcon = "images/islandicon.png",

	marker1,
	marker2,
	islandmarker,

	directionsCon = document.querySelector("#directionsCon"),
	textDirections = document.querySelector("#directionsBox");

	function initMap(position){
		geoPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
		locations[0] = { lat: 44.4999612, lng: -81.3753353 };

		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(textDirections);

		map.setCenter({ lat: 44.4999612, lng: -81.3753353 });
			map.setZoom(13);

			marker1 = new google.maps.Marker({
				position : { lat: 44.4999612, lng: -81.3753353 },
				map : map,
				animation: google.maps.Animation.DROP,
				icon: hqicon,
				title: "86 Saugeen St. Southampton"
		});
			islandmarker = new google.maps.Marker({
				position : { lat: 44.4915901, lng: -81.3989065 },
				map : map,
				animation: google.maps.Animation.DROP,
				icon: islandIcon,
				title: "Chantry Island"
		});
	}
	function enteredAddress(){
		directionsCon.classList.remove("hide");
		var address = document.querySelector('.address').value;
		geocoder.geocode({'address': address}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK){
				// push location into array
				locations[1] = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() }
				map.setCenter(results[0].geometry.location);
				if(marker1){
					marker1.setMap(null);
					marker1 = new google.maps.Marker({
						position : { lat: 44.4999612, lng: -81.3753353 },
						map : map,
						animation: google.maps.Animation.DROP,
						icon: hqicon,
						title: "86 Saugeen St. Southampton"
					});
					marker2 = new google.maps.Marker({
						map : map,
						animation: google.maps.Animation.DROP,
						icon: starticon,
						position : results[0].geometry.location
					});

				calcRoute(results[0].geometry.location);

				} else {
					console.log(status);
				}
			}
		});
	}
	function currentAddress(){
		directionsCon.classList.remove("hide");
		if(marker1){
			var request = {
				origin: geoPosition,
				destination: locations[0],
				travelMode: "DRIVING"
			};
			directionsServices.route(request, function(responce, status){
				if (status == "OK"){
					directionsDisplay.setDirections(responce);
				}
			});
			marker1.setMap(null);
			marker1 = new google.maps.Marker({
				position : { lat: 44.4999612, lng: -81.3753353 },
				map : map,
				animation: google.maps.Animation.DROP,
				icon: hqicon,
				title: "86 Saugeen St. Southampton"
			});
			marker2 = new google.maps.Marker({
				map : map,
				animation: google.maps.Animation.DROP,
				icon: starticon,
				position : geoPosition
			});
		}
	}

	function calcRoute(codedLoc){
		var request = {
			origin: locations[1],
			destination: locations[0],
			travelMode: "DRIVING"
		};

		directionsServices.route(request, function(responce, status){
			if (status == "OK"){
				directionsDisplay.setDirections(responce);
			}
		});
	}

	function handleError(){
		googlemap.classList.add("hide");
		altmap.classList.remove("hide");
	}

	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	}else{
		handleError();
	}
	enteredLocal.addEventListener('click',enteredAddress,false);
	currentLocal.addEventListener('click',currentAddress,false);
})();