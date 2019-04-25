import {Component, OnInit} from '@angular/core';
import {Playlist} from "../../shared/defines/playlist.class";
import {AdsService} from "../../shared/services/ads.service";
import {PlaylistService} from "../../shared/services/playlist.service";
import {Ads} from "../../shared/defines/ads.class";

@Component({
    selector: '[app-widget-playlist]',
    templateUrl: './widget-playlist.component.html'
})
export class WidgetPlaylistComponent implements OnInit {
    items: Playlist[] = [];
    constructor(private _playlistService: PlaylistService) {

    }

    ngOnInit() {
        this._playlistService.getItems().subscribe(
            (items: Playlist[]) => {
                this.items = Playlist.fromJsonList(items);

            })

    }
}