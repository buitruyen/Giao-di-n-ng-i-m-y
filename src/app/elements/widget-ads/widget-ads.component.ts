import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-widget-ads',
    templateUrl: 'widget-ads.component.html'
})
export class WidgetAdsComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
        console.log("WidgetAdsComponent");
    }

}
