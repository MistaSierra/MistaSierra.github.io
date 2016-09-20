
function setup() {
  createCanvas(600, 800);
  background(207, 238, 242);
}

function draw() {
  
  // paint tool
  noStroke();
  fill(259, 200, 200);
  ellipse(mouseX, mouseY, 5, 5);
  
  var scootX = 0;
  scootX = scootX + 1;
  
  //rectangle
  noStroke();
  fill(0)
  rect(scootX, 400, 20, 20)
}

function mousePressed () {
  background(207, 238, 242);
} 