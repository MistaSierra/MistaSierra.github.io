function pacMan () {
  //I am not so sure on how to format all these
  //below are the variables
  y= 300;
  x= 400;
  ySpeed= -3;
  xSpeed= 4;

//meant to create at most 5 pacman
  for (//what is going on here; pacMan <5, pacMan++); {
  noStroke();
  fill(255,255,0);
  ellipse(pacMan.x, pacMan.y, 24, 24);
  }

//bouncing pacMan
  if (pacMan.x> width || pacMan.y< 0) {
    pacMan.xSpeed = pacMan.ySpeed * -1;
  }
 
  if (pacMan.y > height || pacMan.y < 0) {
    pacMan.ySpeed = pacMan.ySpeed * -.5;
  }
  
  pacMan.x = pacMan.x + pacMan.xSpeed;
  pacMan.y = pacMan.y + pacMan.ySpeed;
}