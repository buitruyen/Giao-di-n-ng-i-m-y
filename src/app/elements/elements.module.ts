import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetAdsComponent} from "./widget-ads/widget-ads.component";
import {WidgetSocialComponent} from "./widget-social/widget-social.component";
import {WidgetMenuTopComponent} from "./widget-menu-top/widget-menu-top.component";
import {WidgetBannerComponent} from "./widget-banner/widget-banner.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent

    ],
    providers: [],
    exports: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent
    ]
})
export class ElementsModule {

}
