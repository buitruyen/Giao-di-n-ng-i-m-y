import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {dbAds} from "../../../environments/db-ads";

@Component({
    selector: 'app-admi-push-data',
    templateUrl: './../templates/push-data.component.html'
})
export class PushDataComponent implements OnInit {


    constructor(private _db: AngularFireDatabase) {


    }

    ngOnInit(): void {

    }

    onPushData() {
        //Thêm dữ liệu
        const itemsRef = this._db.list('ads');
        dbAds.ads.forEach((ad: any) => {
            itemsRef.push({
                url: ad.url,
                link: ad.link,
                text: ad.text,
                position: ad.position
            });
        });
    }
}