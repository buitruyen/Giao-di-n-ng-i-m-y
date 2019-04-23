import {Component, OnInit, Input, OnChanges} from '@angular/core';


@Component({
    selector: 'app-elm-playlist',
    templateUrl: './elm-playlist.component.html'
})
export class ElmPlaylistComponent implements OnInit {
    @Input('title') title: string;
    @Input('layout') layout: string;

    ngOnInit() {
    }

    changeLayout(event: any) {
        this.layout = event;
    }
}