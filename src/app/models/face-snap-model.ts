export class FaceSnapModel {
    constructor (public title: string,
                 public description: string,
                 public imageUrl : string,
                 public createdat: Date,
                 public snaps: number) {}   
                 
                 
    addSnap(): void{
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

}


