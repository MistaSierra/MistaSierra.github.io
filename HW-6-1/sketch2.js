
function setup() {
  createCanvas (500,500);
  background(76, 59, 100);
  frameRate (40);
}
  
function draw (){
  var circle (){
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
  
  
}