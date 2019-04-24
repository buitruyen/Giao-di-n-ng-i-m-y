import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Ads} from "../defines/ads.class";
import {FirebaseListObservable} from "@angular/fire/database-deprecated";

@Injectable()
export class AdsService {
    constructor(private _db: AngularFireDatabase) {


    }

    getItemByPosition(position: string): FirebaseListObservable<Ads[]> {
        return this._db.list('/ads/', ref => ref.orderByChild('position').equalTo(position)).valueChanges();
    }

}