import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";

@Component({
    selector: 'app-zvideo-video',
    templateUrl: './../templates/video.component.html'
})
export class VideoComponent implements OnInit {
    videoID: string = null;
    videoInfor: Video = null;
    items: Video[] = null;
    layoutDefault: string = 'grid';

    constructor(private _activatedRouterService: ActivatedRoute,private _videoService: VideoService) {
    }

    ngOnInit() {

        this.videoID = this._activatedRouterService.snapshot.params['id'];
        //VideoInfor by videoId
        this._videoService.getItemsByID(this.videoID).subscribe(
            (items) => {
                this.videoInfor = Video.fromJsonList(items)[0];
            }
        )


    }
}