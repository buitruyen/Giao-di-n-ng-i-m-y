import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ZvideoRoutingModule} from "./zvideo-routing.module";
import {HomeComponent} from "./components/home.component";
import {ErrorComponent} from "./components/error.component";
import {VideosComponent} from "./components/videos.component";
import {VideoComponent} from "./components/video.component";
import {PlaylistsComponent} from "./components/playlists.component";
import {PlaylistComponent} from "./components/playlist.component";
import {ElementsModule} from "../elements/elements.module";

@NgModule({
    imports:[
        CommonModule,
        //Custom module
        ElementsModule,
        //Routing
        ZvideoRoutingModule
    ],
    declarations: [
        HomeComponent,
        ErrorComponent,
        VideosComponent,
        VideoComponent,
        PlaylistsComponent,
        PlaylistComponent
    ],
    providers: [],
})
export class ZvideoModule {

}
