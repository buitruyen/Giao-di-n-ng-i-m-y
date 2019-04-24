import {Component, Input, OnInit} from '@angular/core';
import {FirebaseObjectObservable} from "@angular/fire/database-deprecated";
import {Ads} from "../../shared/defines/ads.class";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
    selector: '[app-widget-ads]',
    templateUrl: 'widget-ads.component.html'
})
export class WidgetAdsComponent implements OnInit {
    @Input("app-widget-ads") position: string;
    item: FirebaseObjectObservable<Ads>;

    constructor(private _db: AngularFireDatabase) {

    }

    ngOnInit(): void {
        //Hiện thị
        this.item = this._db.list('/ads/',ref => ref.orderByChild('position').equalTo(this.position)).valueChanges().subscribe(valueOfItems => {
            console.log(valueOfItems);
        });
    }

}
