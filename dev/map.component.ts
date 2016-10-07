import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { GoogleMapsWrapper } from './google.maps.wrapper';

@Component({
	selector: 'my-map',
	templateUrl: 'dev/map.component.html',
})

export class MapComponent {

	Map: any = null;
	Marker: any;

	constructor(private mWrapper: GoogleMapsWrapper) { }

	ngOnInit() {
		// var self = this;
		this.mWrapper.GoogleMapsAPI.then(tGoogleMaps => {
			let vDiv = document.getElementById("map-container");
			let vLat = 40.75;
			let vLng = -74;
			this.Map = new tGoogleMaps.Map(vDiv, {
				center: { lat: vLat, lng: vLng },
				zoom: 14,
				scrollwheel: false
			});

			// Add Markers Here 
			// for (var i = this.listings.length - 1; i >= 0; i--) {
			// 	var currentListing = this.listings[i];
			// 	let vGeocoder = new tGoogleMaps.Geocoder();
			// 	vGeocoder.geocode({ address: currentListing.address },
			// 		(tResults, tStatus) => {
			// 			if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
			// 				var location = tResults[0].geometry.location;
			// 				new tGoogleMaps.Marker({
			// 					position: { lat: location.lat(), lng: location.lng() },
			// 					map: this.Map,
			// 					title: 'We can add data here...!'
			// 				});
			// 			}
			// 		});
			// }
		});
	}

	ngOnChanges() { }

	// addMarker(tGoogleMaps, model) {
	// 	if (this.Map) {
	// 		if (this.Marker) {
	// 			this.Marker.setMap(null);
	// 			this.Marker = null;
	// 		}
	// 		this.Marker = new tGoogleMaps.Marker({
	// 			position: { lat: model.lat, lng: model.lng },
	// 			map: this.Map,
	// 			title: 'We can add data here...!'
	// 		});
	// 		this.Map.panTo(this.Marker.getPosition());
	// 	}
	// }
}