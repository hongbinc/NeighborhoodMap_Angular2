import {Injectable} from '@angular/core';
import {ListingModel} from './listing.model';
import {LocalStorage, SessionStorage} from "./WebStorage";

@Injectable()
export class ListingsService {

	@LocalStorage()
	allListings = [];

	addListing(d: ListingModel) {
		this.allListings.push(d);
	};

	removeListing(d: ListingModel) {
		for (var i = this.allListings.length - 1; i >= 0; i--) {
			if (d.id == this.allListings[i].id) {
				return this.allListings.splice(i, 1);
			}
		}
	};

	getAllListing() {
		return this.allListings;
	}
}