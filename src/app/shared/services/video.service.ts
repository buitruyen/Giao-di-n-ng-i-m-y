import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AppSetting} from "../../app.setting";
import {Observable} from "rxjs";
import {Video} from "../defines/video.class";

@Injectable()
export class VideoService {
	constructor(private _db: AngularFireDatabase) {
	}

	getItemsFeatured():Observable<Video[]>{
		return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO,ref => ref.limitToFirst(4).orderByChild("featured").equalTo(true)).valueChanges());
	}

	getItemsPopular():Observable<Video[]>{
		return (<Observable<Video[]>>this._db.list(AppSetting.TBL_VIDEO,ref => ref.limitToLast(3).orderByChild("views")).valueChanges());
	}

}