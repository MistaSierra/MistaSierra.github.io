var c1;
function setup() {
  createCanvas (500,500);
  background(76, 59, 100);
  frameRate (40);
  c1 = new Circle();
}

function draw () {
  c1.drawCircle();
   textSize(25);
   text("hold down mouse to increase size of circle", 15,450);




}
