import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ListingModel} from './listing.model';
import {ListingsService} from './listings.service';
import { GoogleMapsWrapper } from './google.maps.wrapper';


@Component({
	selector: 'my-listing',
	templateUrl: "/dev/listings.component.html",
})

export class Listings {
	@Input() listings;
	@Output() public modelForMap = new EventEmitter();

	constructor(private mListingsService: ListingsService, private mGoogleMapsWrapper: GoogleMapsWrapper) { }

	removeListing(obj) {
		this.mListingsService.removeListing(obj);
	}

	showListingInMap(obj: ListingModel) {
		var self = this;
		
		this.mGoogleMapsWrapper.GoogleMapsAPI.then(tGoogleMaps => {
			let vGeocoder = new tGoogleMaps.Geocoder();
			vGeocoder.geocode({ address: obj.address },
				(tResults, tStatus) => {
					if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
						var location = tResults[0].geometry.location;
						self.modelForMap.emit({
							value: {
								lat: location.lat(),
								lng: location.lng()
							}
						});
					}
				});
		});
	}
}