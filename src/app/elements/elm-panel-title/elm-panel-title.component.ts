import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: '[app-elm-panel-title]',
    templateUrl: './elm-panel-title.component.html'
})
export class ElmPanelTitleComponent implements OnInit {
    @Input("app-elm-panel-title") title: string = null;
    @Input('layout') layout: string;
    @Output("myLayout") myLayout = new EventEmitter<string>();

    ngOnInit(): void {
        console.log(this.layout);
    }

    setActive(layout: string) {
        return {
            active: (layout == this.layout)
        }
    }

    setLayout(layout: string) {
        this.layout = layout;
        this.myLayout.emit(layout);
        return false;
    }

}