//sketch won't load in browser
//Player Character
function Player () {
  this.diameter = 25;
  this.x = 20;
  this.y = 20;
}
//player controls player by moving their mouse
Player.prototype.draw = function (){

  this.x = mouseX;
  this.y = mouseY;

  fill (0,255,0);
  ellipse(this.x, this.y, this.diameter, this.diameter);

};
//function for creating an event with objects interact
Player.prototype.collisionCheck = function ( objArr ) {
  var distance = 0;
  var minDist = 0;
  for (var i = 0; i < objArr.length; i++) {
    distance = dist(objArr[i].x, objArr[i].y, this.x, this.y);
    minDist = this.diameter*0.5 + objArr[i].diameter*0.5;

    // check for a collision
    if ( distance <= minDist ) {
      // check size relationship
      //depending on their size ratio, the player will shrink or grow.
      if (objArr[i].diameter <= this.diameter) {
        this.diameter = this.diameter + 5;
      }
      if (objArr[i].diameter >= this.diameter) {
        this.diameter = this.diameter - 5;
      }
      // respawn enemy after collision
      objArr[i].respawn();
    }
  }
};

// Enemy Characters
function Enemies (initXPos, idx) {

  //variables
  this.x = initXPos;
  this.y = 300;
  this.diameter = random (5,70);
  this.ySpeed= random(-10, 7);
  this.xSpeed= random(-10, 7);
  this.idx = idx;
}

//draw function for Enemies class
Enemies.prototype.draw = function (objArr) {
  this.move ();
  //this.timer();

  //Enemy
  noStroke();
  fill(255,0,0);
  ellipse(this.x, this.y, this.diameter, this.diameter);

  //Enemy object collision. if enemy's diameter is equal to another's they go in the opposite direction
  for (var i = 0; i < objArr.length; i++) {
    var distance = 0;
    var minDist = 0;
    distance = dist(objArr[i].x, objArr[i].y, this.x, this.y);
    minDist = this.diameter*0.5 + objArr[i].diameter*0.5;
    // console.log(this.idx + " : " + distance + " : " + minDist);

    // check for a collision
    if ( distance <= minDist && this.idx != i ) {
      this.ySpeed = this.ySpeed * -1;
      this.xSpeed = this.xSpeed * -1;
    }
  }
};

Enemies.prototype.move = function () {
  //boundaries for moving enemies. Should go in all directions
  if (this.x> width || this.x< 0) {
    this.xSpeed = this.xSpeed * -1;
    // this.ySpeed = this.ySpeed * -1;
  }

  if (this.y > height || this.y < 0) {
    // this.xSpeed = this.xSpeed * -1;
    this.ySpeed = this.ySpeed * -1;
  }

  this.x = this.x + this.xSpeed;
  this.y = this.y + this.ySpeed;

};
//enemies "come back to life" when "defeated"
Enemies.prototype.respawn = function () {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 70);
  this.xSpeed = -1 * this.xSpeed;
  this.ySpeed = -1 * this.ySpeed;
};
