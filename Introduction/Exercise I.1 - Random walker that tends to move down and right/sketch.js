let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(26, 24, 32);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(255);
    point(this.x,this.y);
  }

  step() {
    let choice = floor(random(6));
    if (choice == 0 || choice == 1) {
      this.x++;
    } else if (choice == 2) {
      this.x--;
    } else if (choice == 3 || choice == 4) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
