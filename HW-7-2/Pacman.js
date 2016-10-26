 noStroke();
  fill(255,255,0);
  arc( this.x, this.y, 34, 34, PI*1/8, -PI*1/8, PIE );
  //ellipse(this.x, this.y, 34, 34);
 
 
	}
  

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

}

//I know these are needed I'm just not sure where to start
PacMan.prototype.timer = function(){
  
}

PacMan.prototype.personalSpace = function (){
  
}



//these are just notes for later
//scale(-1,1) to turn around pacman
//DOM = Document Object Model
//ciel() floor() round numbers up and down

