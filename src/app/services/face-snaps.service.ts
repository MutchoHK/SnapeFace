import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})

export class FaceSnapService {
  faceSnaps: FaceSnap[] =[
    {
      id: 1,
      title: 'Teddy',
      description : 'Mutcho is a social media app that allows you to share photos with friends.',
      createDate: new Date(),
      snaps: 250,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris'
    },
    {
      id: 1,
      title: 'Three Rock Mountain',
      description : 'Mutcho is a social media app that allows you to share photos with friends.',
      createDate: new Date(),
      snaps: 6,
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    },
    {
      id: 3,
      title: 'Ptit Dej',
      description : 'Mutcho is a social media app that allows you to share photos with friends.',
      createDate: new Date(),
      snaps: 6,
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      location: 'Paris'
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapsById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('Snap not found!');
    }
    else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapsById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
