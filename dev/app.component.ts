import {Component, Output, EventEmitter} from '@angular/core';
import {ListingModel} from './listing.model';
import {MapComponent} from './map.component';
import { GoogleMapsWrapper } from './google.maps.wrapper';

@Component({
    selector: 'my-app',
    directives: [MapComponent],
    templateUrl: "/dev/app.component.html",
})

export class AppComponent {
	constructor(private mWrapper: GoogleMapsWrapper) { 
	}
}