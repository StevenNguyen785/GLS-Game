
let uImg;
let tImg;
let bImg;
let dumbells = [];

function preload() {
  uImg = loadImage('davegame.png');
  tImg = loadImage('dumbells.png');
  bImg = loadImage('cartoongym.jpg');
}

function setup() {
  createCanvas(1000, 800);
  davegame = new davegame();
}

function keyPressed() {
  if (key == ' ') {
    davegame.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    dumbells.push(new dumbell());
    //collideRectRect(200,200,100,150,mouseX,mouseY,50,75);
  }

  background(bImg);
  for (let d of dumbells) {
    d.move();
    d.show();
    if(davegame.hits(d)) {
      console.log('game over');
      noLoop();
    }
  }

  davegame.show();
  davegame.move();


}
