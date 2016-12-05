var Enemy=[];
var numOfEnemy = 10;


function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < numOfEnemy; i++) {
    Enemy.push( new Enemies( i * 100 + 100 ) );
  }
}

function draw() {
  background (10,100,40);

  var Player;
  var currentEnemies;

//create number of enemies
  for (var i = 0; i < Enemy.length; i++) {
    currentEnemies = Enemy[i];
    currentEnemies.draw();
  }
}
    currentEnemies.draw();
