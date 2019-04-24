import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
    selector: 'app-admi-push-data',
    templateUrl: './../templates/push-data.component.html'
})
export class PushDataComponent implements OnInit {


    constructor(db: AngularFireDatabase) {


    }

    ngOnInit(): void {

    }
}