import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ElementsModule} from "./elements/elements.module";
import {SharedModule} from "./shared/shared.module";
import {ZvideoModule} from "./zvideo/zvideo.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [

        //Angular module
        BrowserModule,
        //Routing
        AppRoutingModule,
        //Custom module
        SharedModule,
        ElementsModule,
        ZvideoModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
