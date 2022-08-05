function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  loadPixels();

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    noiseDetail(1, 0.5); //Play with noiseDetail() here
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      //Play with colors here
      let r = noise(xoff + 200, yoff) * 255;
      let g = noise(xoff, yoff + 50) * 255;
      let b = noise(xoff, yoff) * 255;

      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;


      xoff += 0.03; //Play with xoff here
    } 
  
    yoff += 0.01; //Play with yoff here
  }
  updatePixels();
  //noLoop();
}
