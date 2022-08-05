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
    let choice = random(1);
    let probability = 0.5;
    if (choice <= probability) {
      let xdiff = Math.sign(mouseX - this.x);
      let ydiff = Math.sign(mouseY - this.y);

      this.x += xdiff;
      this.y += ydiff;
    }
    else {
      let choice = floor(random(4));
      if (choice == 0) {
        this.x++;
      }
      if (choice == 1) {
        this.x--;
      }
      if (choice == 2) {
        this.y--;
      }
      else {
        this.y++;
      }
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}