import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AppSetting} from "../../app.setting";
import {Observable} from "rxjs";
import {Playlist} from "../defines/playlist.class";

@Injectable()
export class PlaylistService {
    constructor(private _db: AngularFireDatabase) {
    }

    getItems(): Observable<Playlist[]> {
        return (<Observable<Playlist[]>>this._db.list(AppSetting.TBL_PLAYLIST, ref => ref.limitToFirst(2)).valueChanges());
    }

    getItemByID(playlistID: string) {
        return this._db.list(AppSetting.TBL_PLAYLIST, ref => ref.orderByChild("id").equalTo(playlistID)).valueChanges();

    }

}