var enemy=[];
var numOfEnemy = 10;
var player;
var music;
var musicRate = 0.7;
var currTime = 60;
//load music file
function preload() {
  music = loadSound('assets/Neoakushon.mp3');
}

function setup() {
  // hide the mouse
  noCursor();

  for (var i = 0; i < numOfEnemy; i++) {
    enemy.push( new Enemies( i * 100 + 100, i ) );
  }
  //create player
  player = new Player ();

  // music
  music.loop();
  music.rate(0.7);

}

function draw() {
  createCanvas(500, 500);
  background (10,100,40);

  fill(250)
  textSize(15)
  text ("SCORE:" + player.diameter,400,50)

  var currentEnemies;
  //display player's diameter, that is their score

  player.draw();
  // check for collisions and adjust size
  player.collisionCheck( enemy );

  //create number of enemies
  for (var i = 0; i < enemy.length; i++) {
    currentEnemies = enemy[i];
    currentEnemies.draw(enemy);
  }

  timer();
}

//display timer or countdown
function timer() {

  push();
  fill(255);
  rect(width-110,10,100,20);
  fill(0);
  textSize(20);
  text("time: "+currTime, width-100, 28);
  pop();

  //increase speed of music at 20, otherwise keep same
  if (frameCount % 60 === 0) {
    currTime--;

    if (currTime < 20) {
      musicRate = musicRate + musicRate * 0.07;
      text(musicRate, 10, 10);
      music.rate(musicRate);
    }
      else {
        music.rate(0.7);
      }
  }

//reset player and timer when countdown is at 0
  if(currTime <= -1){
    reset();
  }
}

//game restarts after the timer reaches "0"
function reset() {
  player.diameter = 15;
  currTime= 60;

}
