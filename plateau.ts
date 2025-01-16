export class Plateau {
  w: number;
  h: number;
  constructor(w: number, h: number) {
    this.h = h;
    this.w = w;
  }

  isWithinBoundary(roverX : number, roverY:number){
    //ceck roverX is  less than 0 or higher than this.w => return false

    //ceck rovery is  less than 0 or higher than this.h => return false

    // otherwise return true

  }

  willCollide(futureX:number, futureY:number, roversCoordinate: number[]){
    // roversCoordinate.some(rov -> rov.x == futureX &&rov.y == futureY)
  }
}
