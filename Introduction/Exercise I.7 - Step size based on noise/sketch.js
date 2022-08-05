let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.tx = 0;
    this.ty = 10000;
  }

  render() {
    stroke(0);
    ellipse(this.x,this.y, 20, 20);
  }

  step() {
    let x = map(noise(this.tx), 0, 1, -5, 5);
    let y = map(noise(this.ty), 0, 1, -5, 5);

    this.x += x;
    this.y += y;

    this.tx += 0.01;
    this.ty += 0.01;

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}