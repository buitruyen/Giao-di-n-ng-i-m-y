import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-zvideo-playlist',
    templateUrl: './../templates/playlist.component.html'
})
export class PlaylistComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    playlistID: string = null;
    layoutDefault: string = 'grid';

    ngOnInit(): void {
        this.subscription = this._activatedRouteService.params.subscribe(
            (params: Params) => {
                this.playlistID = params["id"];
                console.log(this.playlistID);

            }
        )
    }


    constructor(private  _activatedRouteService: ActivatedRoute) {
    }

    ngOnDestroy(): void {
        this.subscription.closed;
    }




}