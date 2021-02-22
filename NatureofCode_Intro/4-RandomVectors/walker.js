class walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }
  update() {

    // Adds the vector to the dot's position each frame
    // with the vector being (1,-1)
    this.pos.add(this.vel)
    // this.pos.x = this.pos.x + this.vel.x;
    // this.pos.y = this.pos.y + this.vel.y;

    // this.pos.x = this.pos.x + random(-1, 1);
    // this.pos.y = this.pos.y + random(-1, 1);
  }
  show() {
    stroke(255, 100);
    strokeWeight(20);
    point(this.pos.x, this.pos.y);
  }
}