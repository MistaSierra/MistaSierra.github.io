var x = 0;
var speed = 3;
var circleSize = 100;


function setup() {
  createCanvas (500,500);
  background(76, 59, 100);
  frameRate (40);
}

function draw() {
  noStroke();
  fill (random(0,200), 0, random(0,150));
  ellipse(x, height/2, circleSize, circleSize);
  
  textSize(25)
  text("hold down mouse to increase size of circle", 15,450); 
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  
  x = x + speed;
  
  if(mouseIsPressed) {
    circleSize = circleSize + 1;
  } else if (circleSize > 10) {
    circleSize = circleSize - .5;
   }
    
  }
  
  
