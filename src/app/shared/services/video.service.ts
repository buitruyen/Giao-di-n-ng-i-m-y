import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AppSetting} from "../../app.setting";
import {BehaviorSubject, Observable} from "rxjs";
import {Video} from "../defines/video.class";

@Injectable()
export class VideoService {
    constructor(private _db: AngularFireDatabase) {
    }

    getItemsFeatured(): Observable<Video[]> {
        return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO, ref => ref.limitToFirst(4).orderByChild("featured").equalTo(true)).valueChanges());
    }

    getItemsPopular(): Observable<Video[]> {
        return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO, ref => ref.limitToLast(3).orderByChild("views")).valueChanges());
    }

    getItemsByPlaylistID(playListID: string, totalItems: number = 4): Observable<Video[]> {
        return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO, ref => ref.limitToFirst(totalItems).orderByChild("playlistID").equalTo(playListID)).valueChanges());
    }

    getItemsScrollByPlaylistID(playListID: string, limit: BehaviorSubject<number>): Observable<Video[]> {
        return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO, ref => ref.limitToFirst(limit.getValue()).orderByChild("playlistID").equalTo(playListID)).valueChanges());
    }

    getItemsLastByPlaylistID(playListID: string): Observable<Video[]> {
        return (<Observable<Video[]>> this._db.list(AppSetting.TBL_VIDEO, ref => ref.limitToLast(1).orderByChild("playlistID").equalTo(playListID)).valueChanges());
    }

    getItemsByID(videoID: string): Observable<Video[]> {
        return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild("id").equalTo(videoID)).valueChanges());
    }


}