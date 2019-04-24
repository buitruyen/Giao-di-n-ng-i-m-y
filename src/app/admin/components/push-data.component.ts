import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {dbAds} from "../../../environments/db-ads";
import {dbPlaylist} from "../../../environments/db-playlist";
import any = jasmine.any;

@Component({
    selector: 'app-admi-push-data',
    templateUrl: './../templates/push-data.component.html'
})
export class PushDataComponent implements OnInit {


    constructor(private _db: AngularFireDatabase) {


    }

    ngOnInit(): void {

    }

    onPushData() {
        // //Thêm dữ liệu ads
        // const itemsRef = this._db.list('ads');
        // dbAds.ads.forEach((ad: any) => {
        //     itemsRef.push({
        //         url: ad.url,
        //         link: ad.link,
        //         text: ad.text,
        //         position: ad.position
        //     });
        // });

        //Thêm dữ liệu cho playlist
        const itemsRef = this._db.list('playlist');
        dbPlaylist.playlist.forEach((playlist: any) => {
            itemsRef.push({
                id: playlist.id,
                channelId:playlist.channelId,
                title: playlist.title,
                slug: playlist.slug,
                description: playlist.description,
                thumbnails: playlist.thumbnails,
            });
        });

        // const itemsRef = this._db.list('playlist');
        // var myArray = [];
        // dbPlaylist.playlist.forEach((playlist: any) => {
        //     myArray.push(playlist['items'])
        // });
        // myArray.forEach((item: any) => {
        //     item.forEach((i: any)=>{
        //         itemsRef.push({
        //             id: i.id,
        //             channelId: i.channelId,
        //             title: i.title,
        //             slug: i.slug,
        //             description: i.description,
        //             thumbnails: i.thumbnails,
        //         });
        //     })
        // })
    }

}