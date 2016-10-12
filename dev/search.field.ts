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

    Lat: string;
    Lng: string;
    getGeocode() {

        this.mWrapper.GoogleMapsAPI.then(tGoogleMaps => {

            let vGeocoder = new tGoogleMaps.Geocoder();
            vGeocoder.geocode({ address: this.neighborhood },
                (tResults, tStatus) => {
                    if (tStatus === tGoogleMaps.GeocoderStatus.OK) {
                        var location = tResults[0].geometry.location;
                        this.Lat = location.lat();
                        this.Lng = location.lng();
                        console.log(this.Lat,this.Lng);
                        // get neighborhood geocode    
                    }
                });
        });
    }
}
