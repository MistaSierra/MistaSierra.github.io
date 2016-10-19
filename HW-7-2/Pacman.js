
//constructor method class type PacMan
function PacMan (initXPos) {
  //I am not so sure on how to format all these
  //variables
  this.x = initXPos;
  this.y = 300;
  this.ySpeed= -3;
  this.xSpeed= 4;
}
//draw function for PacMan class
PacMan.prototype.draw = function () {
  //the drawing of the a body of the pacMan
  this.move ();
  noStroke();
  fill(255,255,0);
  ellipse(this.x, this.y, 24, 24);
  }


// //adding new balls
// for (var i = 0; var i <5, var i++); {
//   if ()

PacMan.prototype.move = function () {
//boundaries for bouncing balls
  if (this.x> width || this.x< 0) {
    this.xSpeed = this.xSpeed * -1;
  }

  if (this.y > height || this.y < 0) {
    if( this.y < 0){
      this.y = 1;
    }
    if( this.y>height) {
      this.y = height -1;
    }
    this.ySpeed = this.ySpeed * -.5;
  }

  this.x = this.x + this.xSpeed;
  this.y = this.y + this.ySpeed;

  fill(255);
  text(this.y, 20, 20);

}



//these are just notes for later
//scale(-1,1) to turn around pacman
//DOM = Document Object Model
//ciel() floor() round numbers up and down
