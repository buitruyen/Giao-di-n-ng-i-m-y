import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetAdsComponent} from "./widget-ads/widget-ads.component";
import {WidgetSocialComponent} from "./widget-social/widget-social.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WidgetAdsComponent,
        WidgetSocialComponent

    ],
    providers: [],
    exports: [
        WidgetAdsComponent,
        WidgetSocialComponent
    ]
})
export class ElementsModule {

}
