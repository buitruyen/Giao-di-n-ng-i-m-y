import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {dbPlaylist} from "../../../environments/db-playlist";

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
        // const itemsRef = this._db.list('playlist');
        // dbPlaylist.playlist.forEach((playlist: any) => {
        //     itemsRef.push({
        //         id: playlist.id,
        //         channelId:playlist.channelId,
        //         title: playlist.title,
        //         slug: playlist.slug,
        //         description: playlist.description,
        //         thumbnails: playlist.thumbnails,
        //     });
        // });


        //Thêm dữ liệu cho video
        const itemsRef = this._db.list('video');
        dbPlaylist.playlist.forEach((playlist: any) => {
            playlist.items.forEach((video: any) => {
                itemsRef.push({
                    id: video.id,
                    channelId: video.channelId,
                    description: video.description,
                    playlistID: video.playlistID,
                    publishedAt: video.publishedAt,
                    slug: video.slug,
                    thumbnails: video.thumbnails,
                    title: video.title,
                    comments: this.getRandomInt(1, 500),
                    views: this.getRandomInt(1, 100),
                    ratings: this.getRandomInt(1, 100),
                    featured: this.getRandomInt(1, 5) == 2 ? true : false,
                })
            })
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

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max + min + 1)) + min;
    }

}