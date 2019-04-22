import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetAdsComponent} from "./widget-ads/widget-ads.component";
import {WidgetSocialComponent} from "./widget-social/widget-social.component";
import {WidgetMenuTopComponent} from "./widget-menu-top/widget-menu-top.component";
import {WidgetBannerComponent} from "./widget-banner/widget-banner.component";
import {WidgetMenuMainComponent} from "./widget-menu-main/widget-menu-main.component";
import {ElmHeaderComponent} from "./elm-header/elm-header.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent,
        WidgetMenuMainComponent,
        ElmHeaderComponent

    ],
    providers: [],
    exports: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent,
        WidgetMenuMainComponent,
        ElmHeaderComponent
    ]
})
export class ElementsModule {

}
