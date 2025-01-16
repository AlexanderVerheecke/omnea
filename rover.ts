export class Rover {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  //LMLMLMLMM
  execute(commands:string){

    for(let command of commands){
        if(command == 'L'){
            this.turnLeft()
        }
        if (command == 'R'){
            this.turnRight()
        }
        if(command == 'M'){
            this.moveForward()
        }
    }

  }

  moveForward() {
    switch (this.direction) {
      case "N":
        this.y += 1;
        break;
      case "S":
        this.y -= 1;
        break;
      case "W":
        this.x -= 1;
        break;
      case "E":
        this.x += 1;
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "W":
        this.direction = "S";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
  }
}
