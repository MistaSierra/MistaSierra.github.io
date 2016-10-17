var pacMan = {
  
  y = 200;
  x = 300;
  ySpeed = -3;
  xSpeed = 4;

  if (pacMan.x> width || pacMan.y< 0) {
    pacMan.xSpeed = pacMan.ySpeed * -1;
  }
 
  if (pacMan.y > height || pacMan.y < 0) {
    pacMan.ySpeed = pacMan.ySpeed * -.5;
  }
  
  pacMan.x= pacMan.x + pacMan.xSpeed;
  pacMan.y = pacMan.y + pacMan.ySpeed;
}