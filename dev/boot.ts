///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocalStorageService, LocalStorageSubscriber} from './LocalStorageEmitter';
import {AppComponent} from "./app.component";
import {ListingsService} from "./listings.service";
import {GoogleMapsWrapper} from './google.maps.wrapper';

var appPromise = bootstrap(AppComponent, [LocalStorageService, ListingsService, GoogleMapsWrapper]);

// register LocalStorage, this registers our change-detection.
LocalStorageSubscriber(appPromise);
