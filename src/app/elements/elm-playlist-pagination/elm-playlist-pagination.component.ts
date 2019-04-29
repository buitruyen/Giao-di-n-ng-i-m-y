import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Playlist} from "../../shared/defines/playlist.class";
import {PlaylistService} from "../../shared/services/playlist.service";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";
import {PagerService} from "../../shared/services/pager.service";


@Component({
    selector: 'app-elm-playlist-pagination',
    templateUrl: './elm-playlist-pagination.component.html'
})
export class ElmPlaylistPaginationComponent implements OnInit, OnChanges {
    @Input('playlistID') playlistID: string;
    @Input('layout') layout: string;
    @Input('totalItems') totalItem: number = 2;


    playlistInfor: Playlist = null;
    items: Video[] = [];
    pager: any;

    constructor(private _playlistService: PlaylistService, private _videoService: VideoService, private _pagerService: PagerService) {

    }

    ngOnInit() {
        this.initData();
        this.pager = this._pagerService.getPager(17, 2, 5);
        console.log(this.pager);
    }

    changeLayout(event: any) {
        this.layout = event;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.initData();

    }

    initData() {
        //Playlist Infor
        this._playlistService.getItemByID(this.playlistID).subscribe(
            (items) => {
                this.playlistInfor = Playlist.fromJsonList(items)[0];
            });
        //Videos
        this._videoService.getItemsByPlaylistID(this.playlistID, +(this.totalItem)).subscribe(
            (items: Video[]) => {
                this.items = Video.fromJsonList(items);
            });

    }
}