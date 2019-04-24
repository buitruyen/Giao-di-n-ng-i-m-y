import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdsService} from "./services/ads.service";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [

    ],
    providers: [AdsService],
})
export class SharedModule {

}
