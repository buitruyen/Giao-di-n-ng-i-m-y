import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
import {FirebaseListObservable, FirebaseObjectObservable} from "@angular/fire/database-deprecated";

@Component({
    selector: 'app-admin-training',
    templateUrl: './../templates/training.component.html'
})
export class TrainingComponent implements OnInit {

    items: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;

    constructor(db: AngularFireDatabase) {
        this.items = db.list('/items').valueChanges();
        
        this.item = db.object('/items/course2').valueChanges();
        this.items.subscribe(valueOfItems => {
            console.log(valueOfItems);
        })

    }

    ngOnInit(): void {
        console.log(this.items);
    }
}