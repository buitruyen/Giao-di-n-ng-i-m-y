import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-elm-loader',
	templateUrl: './elm-loader.component.html'
})

export class ElmLoaderComponent implements OnInit {

	@Input("isLoading") isLoading: boolean = false;
	
	constructor()
	{
		
	}

	ngOnInit(){
		
	}
	
}
