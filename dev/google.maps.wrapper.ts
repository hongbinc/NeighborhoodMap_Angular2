import {Injectable} from "@angular/core";

@Injectable()
export class GoogleMapsWrapper {
    static LoadAPI: Promise<any> = null;

    get GoogleMapsAPI(): Promise<any> {
        return GoogleMapsWrapper.LoadAPI;
    }
    
    constructor() {
        if (GoogleMapsWrapper.LoadAPI === null) {
            GoogleMapsWrapper.LoadAPI = new Promise((tResolve) => {
                window['__onGoogleMapsLoaded'] = (tEvent) => {
                    tResolve(window['google'].maps);
                }
            });
            this.LoadScript();
        }
    }

    LoadScript() {
        let vNode = document.createElement("script");
        vNode.src = "//maps.googleapis.com/maps/api/js?callback=__onGoogleMapsLoaded";
        vNode.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(vNode);
    }
}