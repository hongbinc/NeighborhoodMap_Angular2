import {Component, Input, Output, EventEmitter} from "@angular/core";
import { GoogleMapsWrapper } from './google.maps.wrapper';

@Component({
    selector: "map-search-field",
    templateUrl: "/dev/search.field.html"
})

export class MapSearchField {
    constructor(private mWrapper: GoogleMapsWrapper){}

    @Input() neighborhood: string;
    @Input() keyword: string;
    @Input() filterword: string;


    getGeocode() {


        this.mWrapper.GoogleMapsAPI.then(tGoogleMaps => {

            let vGeocoder = new tGoogleMaps.Geocoder();
            vGeocoder.geocode({ address: this.neighborhood },
                (tResults, tStatus) => {
                    if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
                        var location = tResults[0].geometry.location;
                        // get neighborhood geocode    
                    }
                });
        });
    }
}
