// var x;
// var y;
var step;

function setup() {
	createCanvas(400, 400);
	background(0);
	// x = width / 2;
	// y = height / 2;
	// Instead we use createVector to store an x and y location in
	// a single variable, in this case, pos.
	pos = createVector(width / 2, height / 2)
	step = 2;

}

function draw() {
	stroke(255, 100);
	strokeWeight(2);
	point(pos.x, pos.y);
	// Instead of the long switch function below we can now just
	// use pos.x and pos.y to change it by a random value between
	// 0 and 1
	pos.x = pos.x + random(-1, 1)
	pos.y = pos.y + random(-1, 1)
}

// switch (r) {
// 	case 0:
// 		x = x + step
// 		break;
// 	case 1:
// 		x = x - step
// 		break;
// 	case 2:
// 		y = y + step
// 		break;
// 	case 3:
// 		y = y - step
// 		break;
// }