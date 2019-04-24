import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdsService} from "./services/ads.service";
import {PlaylistService} from "./services/playlist.service";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [

    ],
    providers: [AdsService,PlaylistService],
})
export class SharedModule {

}
