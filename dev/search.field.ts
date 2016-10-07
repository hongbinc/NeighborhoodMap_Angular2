import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "map-search-field",
    templateUrl: "/dev/search.field.html"
})

export class MapSearchField {
    constructor() { }

    @Input() neighborhood: string;
    @Input() keyword: string;
    @Input() filterword: string;

    
}