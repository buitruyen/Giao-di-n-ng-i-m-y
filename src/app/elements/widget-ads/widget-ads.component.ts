import {Component, Input, OnInit} from '@angular/core';
import {Ads} from "../../shared/defines/ads.class";
import {AdsService} from "../../shared/services/ads.service";

@Component({
    selector: '[app-widget-ads]',
    templateUrl: 'widget-ads.component.html'
})
export class WidgetAdsComponent implements OnInit {
    @Input("app-widget-ads") position: string;
    item: Ads = null;

    constructor(private _adService: AdsService) {

    }

    ngOnInit(): void {
        this._adService.getItemByPosition(this.position).subscribe(
            (items: Ads[]) => {
                this.item = Ads.fromJsonList(items)[0];

            })

    }

}
