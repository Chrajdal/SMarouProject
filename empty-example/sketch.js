let x;
let y;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  clear();
  background(128);
  x = width / 2;
  y = height / 2;
}

function draw() {
  // put drawing code here
  clear();
  background(128);
  circle(x, y, 50);
}