function setup() {
	createCanvas(400, 400);
	background(0);
	walker = new walker(200, 200);

}

function draw() {
	walker.update();
	walker.show();
}
