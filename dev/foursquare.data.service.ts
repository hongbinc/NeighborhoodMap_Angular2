import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FoursquareDataService {
    constructor() {}

    public LoadFourSquare() {
        //Create Foursquare API data URL
        
        // var url_prefix = 'https://api.foursquare.com/v2/venues/explore?client_id=';
        // var client_id = '1I25VINMXH4AXMWCEUDLLBDD0LIWFSBVNXRCM3USQQOBCBSW';
        // var client_secret = '&client_secret=MDMKL344UHNL4NDWGNN5HVQBZEDPWMIUOOGCODYQV5PFTE2R';
        // var version = '&v=20130815&venuePhotos=1';
        // var location = '&ll=' + lat + ',' + lng;
        // var keyword = self.keyword();
        // var search = '&query=' + keyword;
        // var FourSquareURL = url_prefix + client_id + client_secret + version + location + search;


        // var $APIError = $('#APIError');
        // var url_prefix = 'https://api.foursquare.com/v2/venues/explore?client_id=';
        // var client_id = '1I25VINMXH4AXMWCEUDLLBDD0LIWFSBVNXRCM3USQQOBCBSW';
        // var client_secret = '&client_secret=MDMKL344UHNL4NDWGNN5HVQBZEDPWMIUOOGCODYQV5PFTE2R';
        // var version = '&v=20130815&venuePhotos=1';
        // var location = '&ll=' + lat + ',' + lng;
        // var keyword = self.keyword();
        // var search = '&query=' + keyword;
        // var FourSquareURL = url_prefix + client_id + client_secret + version + location + search;
        
        // $.getJSON(FourSquareURL, function (data) {

        //     var FourSquareData = data.response.groups[0].items;

        //     FourSquareData.forEach(function (data) {
        //         self.dataList.push(new venue(data));
        //     });
        //     self.filterList(self.dataList());
        //     self.dataList().forEach(function (venueItem) {
        //         displayMarker(venueItem);
        //     });
            
        //     // set bounds to FourSqure suggested bounds for each items
        //     var bounds = data.response.suggestedBounds;
        //     if (bounds !== undefined) {
        //         mapBounds = new google.maps.LatLngBounds(
        //           new google.maps.LatLng(bounds.sw.lat, bounds.sw.lng),
        //           new google.maps.LatLng(bounds.ne.lat, bounds.ne.lng));
        //         map.fitBounds(mapBounds);
        //     }
        // }).error(function (e) {

        //     $APIError.text('Error: Data could not be load');
        // });
    }
}