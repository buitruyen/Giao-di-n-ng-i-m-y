import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WidgetAdsComponent} from "./widget-ads/widget-ads.component";
import {WidgetSocialComponent} from "./widget-social/widget-social.component";
import {WidgetMenuTopComponent} from "./widget-menu-top/widget-menu-top.component";
import {WidgetBannerComponent} from "./widget-banner/widget-banner.component";
import {WidgetMenuMainComponent} from "./widget-menu-main/widget-menu-main.component";
import {ElmHeaderComponent} from "./elm-header/elm-header.component";
import {WidgetPlaylistComponent} from "./widget-playlist/widget-playlist.component";
import {WidgetFeaturedVideoComponent} from "./widget-featured-video/widget-featured-video.component";
import {WidgetPopularVideoComponent} from "./widget-popular-video/widget-popular-video.component";
import {WidgetContactComponent} from "./widget-contact/widget-contact.component";
import {WidgetFacebookComponent} from "./widget-facebook/widget-facebook.component";
import {WidgetCopyrightComponent} from "./widget-copyright/widget-copyright.component";
import {WidgetMenuBottomComponent} from "./widget-menu-bottom/widget-menu-bottom.component";
import {ElmFooterTopComponent} from "./elm-footer-top/elm-footer-top.component";
import {ElmFooterBottomComponent} from "./elm-footer-bottom/elm-footer-bottom.component";
import {ElmFooterComponent} from "./elm-footer/elm-footer.component";
import {ElmPlaylistComponent} from "./elm-playlist/elm-playlist.component";
import {ElmVideoComponent} from "./elm-video/elm-video.component";
import {ElmPanelTitleComponent} from "./elm-panel-title/elm-panel-title.component";
import {RouterModule} from "@angular/router";
import {ElmYoutubeIframeComponent} from "./elm-youtube-iframe/elm-youtube-iframe.component";
import {SharedModule} from "../shared/shared.module";
import {ElmLoaderComponent} from "./elm-loader/elm-loader.component";
import {ElmPlaylistPaginationComponent} from "./elm-playlist-pagination/elm-playlist-pagination.component";
import {ElmPagerComponent} from "./elm-pager/elm-pager.component";
import {ElmPlaylistLoadMoreComponent} from "./elm-playlist-load-more/elm-playlist-load-more.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent,
        WidgetMenuMainComponent,
        ElmHeaderComponent,
        WidgetPlaylistComponent,
        WidgetFeaturedVideoComponent,
        WidgetPopularVideoComponent,
        WidgetContactComponent,
        WidgetFacebookComponent,
        WidgetCopyrightComponent,
        WidgetMenuBottomComponent,
        ElmFooterTopComponent,
        ElmFooterBottomComponent,
        ElmFooterComponent,
        ElmPlaylistComponent,
        ElmVideoComponent,
        ElmPanelTitleComponent,
        ElmYoutubeIframeComponent,
        ElmLoaderComponent,
        ElmPlaylistPaginationComponent,
        ElmPagerComponent,
        ElmPlaylistLoadMoreComponent


    ],
    providers: [],
    exports: [
        WidgetAdsComponent,
        WidgetSocialComponent,
        WidgetMenuTopComponent,
        WidgetBannerComponent,
        WidgetMenuMainComponent,
        ElmHeaderComponent,
        WidgetPlaylistComponent,
        WidgetFeaturedVideoComponent,
        WidgetPopularVideoComponent,
        WidgetContactComponent,
        WidgetFacebookComponent,
        WidgetCopyrightComponent,
        WidgetMenuBottomComponent,
        ElmFooterTopComponent,
        ElmFooterBottomComponent,
        ElmFooterComponent,
        ElmPlaylistComponent,
        ElmVideoComponent,
        ElmPanelTitleComponent,
        ElmYoutubeIframeComponent,
        ElmLoaderComponent,
        ElmPlaylistPaginationComponent,
        ElmPagerComponent,
        ElmPlaylistLoadMoreComponent
    ]
})
export class ElementsModule {

}
