import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import {FaceSnapModel} from "./models/face-snap-model"

@Component({
  selector: 'app-root',  
  imports: [FaceSnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  mySnap!: FaceSnapModel;
  mySnap1!: FaceSnapModel;
  mySnap2!: FaceSnapModel;

  ngOnInit(): void {
    this.mySnap = new FaceSnapModel(
      'Archibald',
      'Mon meilleur ami pour toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    );

    this.mySnap1 = new FaceSnapModel(
      'Ordinateur',
      'Latitude Dell 5530 !',
      'https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_1280.jpg',
      new Date(),
      7
    );

    this.mySnap2 = new FaceSnapModel(
      'Moulin',
      'Tarn et Garonne !',
      'https://cdn.pixabay.com/photo/2020/11/04/19/22/old-windmill-5713337_1280.jpg',
      new Date(),
      355
    );


  }

}
