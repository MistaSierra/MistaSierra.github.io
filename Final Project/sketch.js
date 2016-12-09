var enemy=[];
var numOfEnemy = 10;
var player;
var music;
var musicRate = 0.7;
var currTime = 60;

function preload() {
    music = loadSound('assets/Neoakushon.mp3');
}

function setup() {
  createCanvas(600, 600);
  // hide the mouse
  noCursor();

  for (var i = 0; i < numOfEnemy; i++) {
    enemy.push( new Enemies( i * 100 + 100 ) );
  }
  player = new Player ();

  // deal with zee muzik
  music.loop();
  music.rate(0.7);

}

function draw() {
  background (10,100,40);

  var currentEnemies;

  player.draw();
  // check for collisions and adjust size appropriatly
  player.collisionCheck( enemy );

//create number of enemies
  for (var i = 0; i < enemy.length; i++) {
    currentEnemies = enemy[i];
    currentEnemies.draw();
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

//increase speed of music
    if (frameCount % 60 === 0) {
        currTime--;

        if (currTime < 20) {
            musicRate = musicRate + musicRate * 0.05;
            text(musicRate, 10, 10);
            music.rate(musicRate);
        }
    }

}
