import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdsService} from "./services/ads.service";
import {PlaylistService} from "./services/playlist.service";
import {VideoService} from "./services/video.service";
import {SafePipe} from "./pipes/safe.pipe";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SafePipe

    ],
    exports: [SafePipe],

    providers: [AdsService, PlaylistService, VideoService],
})
export class SharedModule {

}
