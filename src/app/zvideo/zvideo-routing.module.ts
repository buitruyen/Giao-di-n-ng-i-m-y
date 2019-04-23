import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home.component";
import {VideoComponent} from "./components/video.component";
import {VideosComponent} from "./components/videos.component";
import {PlaylistsComponent} from "./components/playlists.component";
import {PlaylistComponent} from "./components/playlist.component";

const DefineRoutes: Routes = [
    //Home page  /
    {path: '', component: HomeComponent},
    // List videos /video?page=1
    {path: '/videos', component: VideosComponent},
    // List Playlists /playlists?page=1
    {path: '/playlists', component: PlaylistsComponent},
    // List video in Playlists /playlists?page=1
    {
        path: '/playlist',
        children: [
            {path: '', component: PlaylistsComponent},
            {path: ':id', component: PlaylistComponent},
        ]

    },

    // infor video
    {
        path: '/video',
        children: [
            {path: '', component: VideosComponent},
            {path: ':id', component: VideoComponent},
        ]

    },

];

@NgModule({
    imports: [RouterModule.forChild(DefineRoutes)],
    exports: [RouterModule]
})
export class ZvideoRoutingModule {
}
