import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";
import {PlaylistService} from "../../shared/services/playlist.service";
import {Playlist} from "../../shared/defines/playlist.class";

@Component({
    selector: 'app-zvideo-video',
    templateUrl: './../templates/video.component.html'
})
export class VideoComponent implements OnInit {
    videoID: string = null;
    videoInfor: Video = null;
    playlistInfor: Playlist = null;

    constructor(private _activatedRouterService: ActivatedRoute, private _playlistService: PlaylistService, private _videoService: VideoService) {
    }

    ngOnInit() {

        this.videoID = this._activatedRouterService.snapshot.params['id'];
        //VideoInfor by videoId
        this._videoService.getItemsByID(this.videoID).subscribe(
            (items) => {
                this.videoInfor = Video.fromJsonList(items)[0];
                console.log(this.videoInfor);
                //PlaylistInfor by playlistID
                this._playlistService.getItemByID(this.videoInfor.playlistID).subscribe(
                    (items) => {
                        this.playlistInfor = Playlist.fromJsonList(items)[0];
                        console.log(this.playlistInfor);
                    }
                )
            }
        )


    }
}