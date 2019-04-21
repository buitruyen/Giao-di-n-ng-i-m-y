import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetAdsComponent} from "./widget-ads/widget-ads.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WidgetAdsComponent

    ],
    providers: [],
    exports: [
        WidgetAdsComponent
    ]
})
export class ElementsModule {

}
