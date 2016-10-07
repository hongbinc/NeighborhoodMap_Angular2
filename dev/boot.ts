///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {GoogleMapsWrapper} from './google.maps.wrapper';

var appPromise = bootstrap(AppComponent, [GoogleMapsWrapper]);

