//Create object awareness for when the player bumps in to larger objects
  //they decrease by 5, and increase when they bump into smaller objects they
  //increase by two.

//Timer function for when "game restarts" and when the music speeds up

//I'm the most clueless on how to insert music into this
//If I have time I'd like to add a score board

//Player Character
function Player () {
    this.diameter = 20;
    this.x = 20;
    this.y = 20;
}

Player.prototype.draw = function (){

    this.x = mouseX;
    this.y = mouseY;

  fill (0,255,0);
  ellipse(this.x, this.y, this.diameter, this.diameter);
  //if the player is smaller than Enemy, they grow by 2
  //if the player is larger than Enemy, they shrink by 5

  // if (this.diameter >= Enemies.diameter) {
  //   this.diameter = this.diameter + 2;
  // }
  // if (this.diameter <= Enemies.diameter) {
  //   this.diameter = this.diameter - 5;
  //}

};

Player.prototype.collisionCheck = function ( objArr ) {
    var distance = 0;
    var minDist = 0;
    for (var i = 0; i < objArr.length; i++) {
        distance = dist(objArr[i].x, objArr[i].y, this.x, this.y);
        minDist = this.diameter*0.5 + objArr[i].diameter*0.5;

        // check for a collision
        if ( distance <= minDist ) {

            // check size relationship
            if (objArr[i].diameter <= this.diameter) {
                this.diameter = this.diameter - 5;
                // TODO: What happens when we go negative diameter?????
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



};


Enemies.prototype.move = function () {
//boundaries for moving enemies
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
    this.ySpeed = this.ySpeed * -0.5;
  }

  this.x = this.x + this.xSpeed;
  this.y = this.y + this.ySpeed;

};

Enemies.prototype.respawn = function () {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 50);
    this.xSpeed = -1 * this.xSpeed;
    this.ySpeed = -1 * this.ySpeed;
};
