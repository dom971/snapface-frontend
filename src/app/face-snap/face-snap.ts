import { Component, Input, OnInit } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap-model"

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit{

  @Input() faceSnap!: FaceSnapModel;

  // title! : string;
  // description! : string;
  // createdat! : Date;
  // snaps! : number;
  // imageUrl! : string;
  snapButtonText! : string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    // this.title = 'Archibald';
    // this.description = 'Mon meilleur ami depuis toujours !';
    // this.createdat = new Date();
    // this.snaps = 0;
    // this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';    
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    // this.snaps++;

    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.Snap();
    }
  }

    unSnap() {
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
    }

    Snap() {
      this.faceSnap.addSnap();
      this.snapButtonText = 'oups, unSnap!'
      this.userHasSnapped = true;
    }


}
