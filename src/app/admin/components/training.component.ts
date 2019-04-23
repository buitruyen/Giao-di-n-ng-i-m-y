import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
    selector: 'app-admin-training',
    templateUrl: './../templates/training.component.html'
})
export class TrainingComponent implements OnInit {

    items: Observable<any[]>;

    constructor(db: AngularFireDatabase) {
        this.items = db.list('/items').valueChanges();
        this.items.subscribe(valueOfItems => {
            console.log(valueOfItems);
        })

    }

    ngOnInit(): void {
        console.log(this.items);
    }
}