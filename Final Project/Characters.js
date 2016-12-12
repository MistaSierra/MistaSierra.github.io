//sketch won't load in browser
//Player Character
function Player () {
    this.diameter = 20;
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
            //if the player is smaller than Enemy, they grow by 2
            //if the player is larger than Enemy, they shrink by 5
            if (objArr[i].diameter <= this.diameter) {
                this.diameter = this.diameter - 5;
            } else {
                this.diameter = this.diameter + 2;
            }
            // respawn enemy
            objArr[i].respawn();

        }

    }
};

//constructor method class type Enemies
// Enemy Characters
function Enemies (initXPos) {

//variables
  this.x = initXPos;
  this.y = 300;
  this.diameter = random (50);
  this.ySpeed= random(-10, 10);
  this.xSpeed= random(-10, 10);

}

//draw function for Enemies class
Enemies.prototype.draw = function () {
  //something should go here......
  this.move ();
  //this.timer();

  //Enemy
  noStroke();
  fill(255,0,0);
  ellipse(this.x, this.y, this.diameter, this.diameter);

//Enemy object collision. if enemy's diameter is equal to another's they go in the opposite direction

      if (  objArr[i].diameter == this.diameter ) {
          this.yspeed = this.yspeed * -1;
          this.xspeed = this.xspeed * -1;
       } else {
          this.diameter = this.diameter + 2;
      }

};


Enemies.prototype.move = function () {
//boundaries for moving enemies. Should go in all directions
  if (this.x> width || this.x< 0) {
    this.xSpeed = this.xSpeed * -1;
    this.ySpeed = this.ySpeed * -1;
  }

  if (this.y > height || this.y < 0) {
    this.xSpeed = this.xSpeed * -1;
    this.ySpeed = this.ySpeed * -1;
    }
    this.ySpeed = this.ySpeed * -0.5;
  }

  this.x = this.x + this.xSpeed;
  this.y = this.y + this.ySpeed;

};
//enemies "come back to life" when "defeated"
Enemies.prototype.respawn = function () {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 50);
    this.xSpeed = -1 * this.xSpeed;
    this.ySpeed = -1 * this.ySpeed;
};
