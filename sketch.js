
let uImg;
let tImg;
let bImg;
let dumbells = [];

function preload() {
  uImg = loadImage('davegame.png');
  tImg = loadImage('dumbells.png');
  bImg = loadImage('gamemodbackground.jpg');
}

function setup() {
  createCanvas(800, 600);
  davegame = new davegame();
}

function keyPressed() {
  if (key == ' ') {
    davegame.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    dumbells.push(new Dumbell());
  }

  background(bImg);
  davegame.show();
  davegame.move();

  for (let d of dumbells) {
    d.move();
    d.show();
  }
}
