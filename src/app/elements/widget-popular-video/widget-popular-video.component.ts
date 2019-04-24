import {Component, OnInit} from '@angular/core';
import {Video} from "../../shared/defines/video.class";
import {VideoService} from "../../shared/services/video.service";


@Component({
    selector: '[app-widget-popular-video]',
    templateUrl: './widget-popular-video.component.html'
})
export class WidgetPopularVideoComponent implements OnInit {
    items: Video[] = [];

    constructor(private _videoService: VideoService) {
    }

    ngOnInit() {
        this._videoService.getItemsPopular().subscribe(
            (items: Video[]) => {
                this.items = Video.fromJsonList(items);
            })

    }
}