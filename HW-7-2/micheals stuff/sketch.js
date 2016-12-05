

/**
* @Author: Musick, Michael <michaelmusick>
* @Date:   04-03-2016 16:11
* @Email:  michael@michaelmusick.com
* @Last modified by:   michaelmusick
* @Last modified time: 19-10-2016 09:35

Automatic PacMan Example
*/

// Define an empty PacMan object Array
var pacmans = [];
var numPacMans = 100;

// setup function
function setup() {
	createCanvas(1000, 600);

	// create some pacmans
	var xpos = 0;
	var ypos = 20;
	var diam = 0;
	for (var i = 0; i < numPacMans; i++) {
		diam = round(random(10,30));
		xpos = xpos + diam*2;
		if( xpos >= width - 21){
			ypos = ypos + 80;
			xpos = diam;
		}
		pacmans[i] = new PacMan(xpos, ypos, diam );
		// pacmans[i] = new PacMan(200, 200);
	}
}

// draw loop
function draw() {
	var tempArr = [];
	background(200);

	// update pacman positions
	for (var i = 0; i < pacmans.length; i++) {
		// check neihbors by passing in an array of other PacMan's
		tempArr = pacmans.slice(0,i);
		tempArr = tempArr.concat( pacmans.slice(i+1, pacmans.length) );
		pacmans[i].checkPos( tempArr );

		pacmans[i].draw();
	}

}
