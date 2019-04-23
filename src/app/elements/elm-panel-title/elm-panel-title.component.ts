import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: '[app-elm-panel-title]',
    templateUrl: './elm-panel-title.component.html'
})
export class ElmPanelTitleComponent implements OnInit {
    @Input("app-elm-panel-title") title: string = null;
    @Input('layout') layout: string;


    ngOnInit(): void {
        console.log(this.layout);
    }

    setActive(layout: string) {
        return {
            active: (layout == this.layout)
        }
    }

}