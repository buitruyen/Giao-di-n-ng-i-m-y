import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../shared/services/playlist.service";
import {VideoService} from "../../shared/services/video.service";
import {Playlist} from "../../shared/defines/playlist.class";
import {Video} from "../../shared/defines/video.class";

@Component({
    selector: '[app-widget-featured-video]',
    templateUrl: './widget-featured-video.component.html'
})
export class WidgetFeaturedVideoComponent implements OnInit {
    items: Video[] = [];

    constructor(private _videoService: VideoService) {
    }

    ngOnInit() {
        this._videoService.getItemsFeatured().subscribe(
            (items: Video[]) => {
                this.items = Video.fromJsonList(items);
                console.log(this.items);

            })

    }
}