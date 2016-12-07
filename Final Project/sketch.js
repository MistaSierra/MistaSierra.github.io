var enemy=[];
var numOfEnemy = 10;
var player;


function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < numOfEnemy; i++) {
    enemy.push( new Enemies( i * 100 + 100 ) );
  }
  player = new Player ();

}

function draw() {
  background (10,100,40);

  var currentEnemies;

  player.draw();

//create number of enemies
  for (var i = 0; i < enemy.length; i++) {
    currentEnemies = enemy[i];
    currentEnemies.draw();
  }
}
