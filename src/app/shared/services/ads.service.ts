import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Ads} from "../defines/ads.class";
import {AppSetting} from "../../app.setting";
import {Observable} from "rxjs";

@Injectable()
export class AdsService {
    constructor(private _db: AngularFireDatabase) {
    }

    getItemByPosition(position: string): Observable<Ads[]> {
        return (<Observable<Ads[]>>this._db.list(AppSetting.TBL_ADS, ref => ref.orderByChild('position').equalTo(position)).valueChanges());
    }

}