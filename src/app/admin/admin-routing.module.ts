import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingComponent} from "./components/training.component";
import {PushDataComponent} from "./components/push-data.component";

const DefineRoutes: Routes = [
    //Home page  /
    {path: 'training', component: TrainingComponent},
    {path: 'push-data', component: PushDataComponent},

];

@NgModule({
    imports: [RouterModule.forChild(DefineRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
