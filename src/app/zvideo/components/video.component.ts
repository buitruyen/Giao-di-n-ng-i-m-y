import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, RoutesRecognized} from "@angular/router";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";
import {Subscription} from "rxjs";
import * as $ from 'jquery';
import {filter, pairwise} from "rxjs/operators";


@Component({
    selector: 'app-zvideo-video',
    templateUrl: './../templates/video.component.html'
})
export class VideoComponent implements OnInit, OnDestroy ,AfterViewChecked{
    videoID: string = null;
    videoInfor: Video = null;
    items: Video[] = null;
    layoutDefault: string = 'grid';
    subscription: Subscription;

    constructor(private _activatedRouterService: ActivatedRoute, private _videoService: VideoService,private _routeService:Router) {
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

    ngAfterViewChecked(): void {
        this._routeService.events
            .pipe(filter((e: any) => e instanceof RoutesRecognized),
                pairwise()
            ).subscribe((e: any) => {
            $("html, body").stop().animate({scrollTop:0}, 1000, 'swing');
        });

    }
}