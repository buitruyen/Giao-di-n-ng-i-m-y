import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingComponent} from "./components/training.component";

const DefineRoutes: Routes = [
    //Home page  /
    {path: 'training', component: TrainingComponent},

];

@NgModule({
    imports: [RouterModule.forChild(DefineRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
