let inc = 0.01;
let zoff = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  zoff += 0.01; 
  loadPixels();

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      let c = noise(xoff , yoff, zoff) * 255; //zoff included to animate the noise

      pixels[index + 0] = c;
      pixels[index + 1] = c;
      pixels[index + 2] = c;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}