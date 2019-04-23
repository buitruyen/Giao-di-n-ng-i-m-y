import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: '[app-widget-ads]',
    templateUrl: 'widget-ads.component.html'
})
export class WidgetAdsComponent implements OnInit {
    @Input("app-widget-ads") position: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
