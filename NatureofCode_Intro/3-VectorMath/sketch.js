function setup() {
	createCanvas(400, 400);
	walker = new walker(200, 200);
}

function draw() {
	background(0);
	walker.update();
	walker.show();
}
