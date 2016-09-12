function setup() {
  createCanvas (700, 600);
  background (0,0,0);
}
var x= 200
function draw() {
  ellipse (350,x,x,150)//head
  
  ellipse (290,x,30,10)// left eye
  ellipse (410,x,30,10)//right eye
  line (270,220,430,220)
  
}