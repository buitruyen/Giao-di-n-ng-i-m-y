import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: '[app-elm-pager]',
	templateUrl: './elm-pager.component.html'
})
export class ElmPagerComponent implements OnInit {
	@Input("app-elm-pager") pager: any = null;
	@Output() setCurrentPage = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {
		console.log("ElmPagerComponent");
	}

	setPage(page: number){
		this.setCurrentPage.emit(page);
	}
}