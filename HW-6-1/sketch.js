

var circle() {
  x = 0,
  speed = 3,
  circleSize = 100,
  
  noStroke();
  fill (random(0,200), 0, random(0,150));
  ellipse(this.x, height/2, this.circleSize, this.circleSize);
}
  
  