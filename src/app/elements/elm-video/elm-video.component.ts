import {Component, OnInit, Input} from '@angular/core';
import {Video} from "../../shared/defines/video.class";

@Component({
    selector: '[app-elm-video]',
    templateUrl: './elm-video.component.html'
})
export class ElmVideoComponent implements OnInit {
    @Input("show-desc") showDesc: boolean = false;
    @Input("app-elm-video") item: Video = null;

    ngOnInit() {
        console.log(this.item);
    }
}