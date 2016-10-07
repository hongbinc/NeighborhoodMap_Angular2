import {Component, Output, EventEmitter} from '@angular/core';
import {LocalStorage, SessionStorage} from "./WebStorage";
import {ListingModel} from './listing.model';
import {Listings} from './listings.component';
import {MapComponent} from './map.component';
import { GoogleMapsWrapper } from './google.maps.wrapper';
import {ListingsService} from './listings.service';

@Component({
    selector: 'my-app',
    directives: [Listings, MapComponent],
    templateUrl: "/dev/app.component.html",
})

export class AppComponent {
	@Output() newListing = new EventEmitter();

	isNameEditable = true;
	listings = [];
	currentListing = {
		lat: 40.71,
		lng: -74
	};

	constructor(private mListingsService: ListingsService, private mWrapper: GoogleMapsWrapper) { 
		this.listings = mListingsService.getAllListing();
	}

	@LocalStorage('agentName') 
	agentName: string = 'Vintesh';

	addListing(name, address) {
		this.mListingsService.addListing(new ListingModel(name.value, address.value));
		var addressForPinning = address.value;
		name.value = "";
		address.value = "";

		// Update theh Current Listing to add Marker - 
		var self = this;
		this.mWrapper.GoogleMapsAPI.then(tGoogleMaps => {
			let vGeocoder = new tGoogleMaps.Geocoder();
			vGeocoder.geocode({ address: addressForPinning },
				(tResults, tStatus) => {
					if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
						var location = tResults[0].geometry.location;
						self.currentListing.lat = location.lat();
						self.currentListing.lng = location.lng()
					}
				});
		});
	}

	isEditable() {
		return this.isNameEditable;
	}

	changeMapValues($event) {
		this.currentListing = $event.value;
	}
}