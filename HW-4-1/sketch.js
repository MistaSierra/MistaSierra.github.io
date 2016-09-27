var x = 0;
var speed = 3;

function setup() {
  createCanvas (500,500);
  background(76, 59, 100);
}

function draw() {
  frameRate (40)
  stroke(50);
  fill (random(0,200), 0, random(0,150));
  ellipse(x, height/2, 100, 100);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;
}