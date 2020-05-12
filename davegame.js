class davegame {
  constructor() {
    this.r = 275;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1;
  }

  jump() {
    //if(this.y == height - this.r)
      this.vy = -25;
  }

hits(dumbell) {

  let x1 = this.x + this.r * 0.325;
  let y1 = this.y + this.r * 0.325;
  let x2 = dumbell.x + dumbell.r * 0.325;
  let y2 = dumbell.y + dumbell.r * 0.325;

  return collideCircleCircle(x1,y1,this.r,x2,y2,dumbell.r);
}

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(uImg, this.x, this.y, this.r, this.r);
    fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
