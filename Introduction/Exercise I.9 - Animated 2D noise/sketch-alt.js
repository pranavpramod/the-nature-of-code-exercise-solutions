//An alternate version that animates the colorful noise from Ex I.8.
let inc = 0.01;
let zoff = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  zoff += 0.01;
  noiseDetail(1, 0.5);
  loadPixels();

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      let r = noise(xoff + 200, yoff, zoff) * 255;
      let g = noise(xoff, yoff + 50, zoff) * 255;
      let b = noise(xoff, yoff, zoff) * 255;

      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}
