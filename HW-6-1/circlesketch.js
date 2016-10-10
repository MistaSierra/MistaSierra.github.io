//constructor method
function Circle() {
  this.x = 0;
  this.speed = 3;
  this.circleSize = 100;
}

Circle.prototype.drawCircle = function() {
  noStroke();
  fill (random(0,200), 0, random(0,150));
  ellipse(this.x, height/2, this.circleSize, this.circleSize);

  if (this.x > width || this.x < 0) {
    this.speed = this.speed * -1;
  }

  this.x = this.x + this.speed;

  if(mouseIsPressed) {
    this.circleSize = this.circleSize + 1;
  } else {
    if (this.circleSize > 10) {
      this.circleSize = this.circleSize - .5;
   }

  }

}
