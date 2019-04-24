import {Component, OnInit, Input} from '@angular/core';
import {Playlist} from "../../shared/defines/playlist.class";
import {PlaylistService} from "../../shared/services/playlist.service";
import {VideoService} from "../../shared/services/video.service";


@Component({
    selector: 'app-elm-playlist',
    templateUrl: './elm-playlist.component.html'
})
export class ElmPlaylistComponent implements OnInit {
    @Input('playlistID') playlistID: string;
    @Input('layout') layout: string;


    playlistInfor: Playlist = null;

    constructor(private _playlistService: PlaylistService, private _videoService: VideoService) {

    }

    ngOnInit() {
        this._playlistService.getItemByID(this.playlistID).subscribe(
            (items: Playlist) => {
                this.playlistInfor = Playlist.fromJsonList(items)[0];
            });
    }

    changeLayout(event: any) {
        this.layout = event;
    }
}