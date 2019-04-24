import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {TrainingComponent} from "./components/training.component";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {PushDataComponent} from "./components/push-data.component";

@NgModule({
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireDatabaseModule,// imports firebase/storage only needed for storage features
        //Routing
        AdminRoutingModule

    ],
    declarations: [
        TrainingComponent,
        PushDataComponent
    ],
    providers: [],
})
export class AdminModule {

}
