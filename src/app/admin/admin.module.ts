import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {TrainingComponent} from "./components/training.component";

@NgModule({
    imports:[
        CommonModule,
        //Routing
        AdminRoutingModule
    ],
    declarations: [
       TrainingComponent
    ],
    providers: [],
})
export class AdminModule {

}
