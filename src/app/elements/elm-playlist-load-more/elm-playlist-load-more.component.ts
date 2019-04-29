import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Playlist} from "../../shared/defines/playlist.class";
import {PlaylistService} from "../../shared/services/playlist.service";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";
import {BehaviorSubject} from "rxjs";


@Component({
    selector: 'app-elm-playlist-load-more',
    templateUrl: './elm-playlist-load-more.component.html'
})
export class ElmPlaylistLoadMoreComponent implements OnInit {
    @Input('playlistID') playlistID: string;
    @Input('layout') layout: string;

    private items: Video[] = [];
    private limit: BehaviorSubject<number> = null;
    private lastKey: string = null;
    private queryable: boolean = true;
    private showButtonLoadMore: boolean = true;
    private playlistInfor: Playlist = null;

    constructor(private _playlistService: PlaylistService, private _videoService: VideoService) {

    }

    ngOnInit() {
        this.limit = new BehaviorSubject(3);
        this.initData();

    }

    changeLayout(event: any) {
        this.layout = event;
    }


    initData() {
        //Playlist Infor
        this._playlistService.getItemByID(this.playlistID).subscribe(
            (items) => {
                this.playlistInfor = Playlist.fromJsonList(items)[0];
            });
        //Videos
        this._videoService.getItemsScrollByPlaylistID(this.playlistID, this.limit).subscribe(
            (items: Video[]) => {
                this.items = Video.fromJsonList(items);
            });

    }
    loadMore(){
        this.limit.next(this.limit.getValue() + 3);
        this.initData();
    }
}