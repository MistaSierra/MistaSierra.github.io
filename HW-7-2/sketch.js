var pac=[];
var numOfPacs = 1;

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < numOfPacs; i++) {
    pac.push( new PacMan( i * 100 + 100 ) );
  }
}

function draw() {
  background (0);
  var currentPacMan;

  for (var i = 0; i < pac.length; i++) {
    currentPacMan = pac[i];

    currentPacMan.draw();

  }

}
