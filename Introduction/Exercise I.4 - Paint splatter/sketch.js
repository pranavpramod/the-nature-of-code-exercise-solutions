function setup() {
  createCanvas(640,360);
  background(26, 24, 32);
}

function draw() {
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  let xloc = randomGaussian();
  let yloc = randomGaussian();

  let r  = randomGaussian();
  let g = randomGaussian();
  let b = randomGaussian();

  const sdColor = 20
  const meanColor = 122 // Define a mean value (middle of the rgb scale)

  // Scale the gaussian random number by standard deviation and mean for rgb values
  r = (r * sdColor) + meanColor;
  g = (g * sdColor) + meanColor;
  b = (b * sdColor) + meanColor;

  const sd = 60;                      // Define a standard deviation
  const meanHorizontal = width/2;     // Define a mean value (middle of the screen along the x-axis)
  const meanVertical = height / 2;    // Define a mean value (middle of the screen along the y-axis)
  
  // Scale the gaussian random number by standard deviation and mean for xloc and yloc values
  xloc = ( xloc * sd ) + meanHorizontal;  
  yloc = (yloc * sd) + meanVertical;
  
  fill(r, g, b, 127);
  noStroke();
  ellipse(xloc, yloc, 15, 15);   // Draw an ellipse at our "normal" random position
}