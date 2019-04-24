import {Component, Input, OnInit} from '@angular/core';
import {FirebaseObjectObservable} from "@angular/fire/database-deprecated";
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
        this._adService.getItemByPosition("banner").subscribe(
            (items: Ads[]) => {
                this.item = items[0];
            })

    }

}
