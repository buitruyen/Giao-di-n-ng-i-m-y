import {Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import {Playlist} from "../../shared/defines/playlist.class";
import {PlaylistService} from "../../shared/services/playlist.service";
import {VideoService} from "../../shared/services/video.service";
import {Video} from "../../shared/defines/video.class";
import {PagerService} from "../../shared/services/pager.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
    selector: 'app-elm-playlist-pagination',
    templateUrl: './elm-playlist-pagination.component.html'
})
export class ElmPlaylistPaginationComponent implements OnInit, OnChanges, OnDestroy {
    @Input('playlistID') playlistID: string;
    @Input('layout') layout: string;
    @Input('totalItems') totalItem: number = 2;
    subscriptionQuery: Subscription;
    pagedItems: Video[];


    playlistInfor: Playlist = null;
    items: Video[] = [];
    pager: any;

    constructor(private _playlistService: PlaylistService,
                private _routeService: Router,
                private _activatedRouteService: ActivatedRoute,
                private _videoService: VideoService,
                private _pagerService: PagerService) {

    }

    ngOnInit() {
        this.initData();

    }

    changeLayout(event: any) {
        this.layout = event;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.initData();

    }

    initData() {
        //Playlist Infor
        this._playlistService.getItemByID(this.playlistID).subscribe(
            (items) => {
                this.playlistInfor = Playlist.fromJsonList(items)[0];
            });
        //Videos
        this._videoService.getItemsByPlaylistID(this.playlistID, +(this.totalItem)).subscribe(
            (items: Video[]) => {
                this.items = Video.fromJsonList(items);
                this.subscriptionQuery = this._activatedRouteService.queryParams.subscribe(
                    (params: Params) => {
                        let currentPage: number = params['page'];
                        if (currentPage === undefined) currentPage = 1;
                        this.setPages(currentPage);
                    }
                );


            });

    }

    ngOnDestroy(): void {
        this.subscriptionQuery.unsubscribe();
    }

    setPages(page: number) {
        // get pager object from service
        this.pager = this._pagerService.getPager(this.items.length, +(page), 6);
        if (this.pager) {
            // get current page of items
            this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
            this._routeService.navigate(['playlist', this.playlistID], {
                queryParams: {
                    page: page
                }
            })
        } else {
            this.pagedItems = this.items;
        }


    }
}