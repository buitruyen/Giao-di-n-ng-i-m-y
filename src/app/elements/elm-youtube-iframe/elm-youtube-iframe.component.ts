import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-elm-youtube-iframe',
	templateUrl: './elm-youtube-iframe.component.html'
})
export class ElmYoutubeIframeComponent implements OnInit {
	@Input('videoID') videoID: string;
	@Input('width') width: number 	= 560;
	@Input('height') height: number = 315;

	constructor() {}

	ngOnInit() {
	}
}