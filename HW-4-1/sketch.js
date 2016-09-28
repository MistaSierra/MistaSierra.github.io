var x = 0;
var speed = 3;
var circlesize = 100


function setup() {
  createCanvas (500,500);
  background(76, 59, 100);
}

function draw() {
  frameRate (40)
  noStroke();
  fill (random(0,200), 0, random(0,150));
  ellipse(x, height/2, circlesize, circlesize );
  
  //text("hold down mouse to increase size of circle"), 
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;
  
  if(mouseIsPressed ) {
    circlesize = circlesize + 1;
    
  }
  
  
}