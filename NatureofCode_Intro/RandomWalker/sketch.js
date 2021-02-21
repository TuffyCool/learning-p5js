var x;
var y;
var step;

function setup() {
	createCanvas(400, 400);
	// We draw the background in setup so the point isn't drawn over
	// every frame - to show progress
	background(51);
	x = 200;
	y = 200;
	step = 2;
}

function draw() {
	stroke(255);
	strokeWeight(2);
	// a point at the variables x & y
	point(x, y);

	// random number between 0 and 3 - integer (floor) - rounds down
	var r = floor(random(4));
	// We use a switch statement to tell the program what to do
	// depending on the number rolled
	switch (r) {
		case 0:
			x = x + step
			break;
		case 1:
			x = x - step
			break;
		case 2:
			y = y + step
			break;
		case 3:
			y = y - step
			break;
	}
}