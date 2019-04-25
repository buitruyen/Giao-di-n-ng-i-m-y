import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-zvideo-video',
    templateUrl: './../templates/video.component.html'
})
export class VideoComponent implements OnInit, OnDestroy {
    videoID: string = null;
    videoInfor: Video = null;
    items: Video[] = null;
    layoutDefault: string = 'grid';
    subscription: Subscription;

    constructor(private _activatedRouterService: ActivatedRoute, private _videoService: VideoService) {
    }

    ngOnInit() {
        this.subscription = this._activatedRouterService.params.subscribe(
            (params: Params) => {
                this.videoID = params["id"];
                //VideoInfor by videoId
                this._videoService.getItemsByID(this.videoID).subscribe(
                    (items) => {
                        this.videoInfor = Video.fromJsonList(items)[0];
                    }
                )
            }
        );


    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}