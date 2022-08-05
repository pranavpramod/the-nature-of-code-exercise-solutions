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
    let choice = floor(random(4));
    let stepSize = getExponetialStepSize();

    if (choice == 0) {
      this.x = this.x + stepSize;
    } else if (choice == 1) {
      this.x = this.x - stepSize;
    } else if (choice == 2) {
      this.y = this.y + stepSize;
    } else {
      this.y = this.y - stepSize;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}

function getExponetialStepSize() {
  while (true) {	
    let maxValue = 10;
    let r1 = random(maxValue);	
    let probability = r1 * r1 / (maxValue * maxValue);
    let r2 = random(1);	

    if (r2 < probability) {	
      return r1;
    }
  }
}
