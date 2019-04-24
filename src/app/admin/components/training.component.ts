import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {FirebaseListObservable, FirebaseObjectObservable} from "@angular/fire/database-deprecated";

@Component({
    selector: 'app-admin-training',
    templateUrl: './../templates/training.component.html'
})
export class TrainingComponent implements OnInit {

    private items: FirebaseListObservable<any[]>;
    private item: FirebaseObjectObservable<any>;

    constructor(db: AngularFireDatabase) {
        //Hiện thị
        this.items = db.list('/items', ref => ref.orderByChild('ordering').equalTo(2)).valueChanges();

        this.item = db.object('/items/course2').valueChanges();
        this.items.subscribe(valueOfItems => {
            console.log(valueOfItems);
        });

        //Xóa
        // const promise = db.object('items/abc').remove();
        // promise.then(_ => console.log('success'))
        //     .catch(err => console.log(err, 'You dont have access!'));
        //Save
        // const itemRefSave = db.object('items/abc');
        // itemRefSave.set({id:123, name: 'php'});

        //Updating data
        // const itemRefUpdate = db.object('items/abc');
        // itemRefUpdate.update({ id: 150 });


        //=============================================
        //Thêm dữ liệu
        // const itemsRef = db.list('items');
        // itemsRef.push({ id: 123,name:"angular",ordering:1 });
        // itemsRef.push({ id: 124,name:"php",ordering:2 });
        // itemsRef.push({ id: 125,name:"java",ordering:2 });
        // itemsRef.push({ id: 126,name:"c#",ordering:4 });

        //Cập nhật
        // const itemsRef = db.list('items');
        // itemsRef.update('Ld9x1ze84mTUuGHPu6m', { name: "abc1234" });

        //Xóa
        // const itemsRef = db.list('items');
        // itemsRef.remove();


        // ===========================================


    }

    ngOnInit(): void {
        console.log(this.items);
    }
}