let uImg;
let tImg;
let bImg;
let dumbells = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  uImg = loadImage('davegame.png');
  tImg = loadImage('dumbells.png');
  bImg = loadImage('cartoongym.jpg');
}

// function mousePressed() {
//   dumbells.push(new dumbell());
// }

function setup() {
  createCanvas(800, 600);
  davegame = new davegame();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    davegame.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    davegame.jump();
  }
}

function draw() {
  if (random(3) < 0.05) {
    dumbells.push(new dumbell());
    collideRectRect(200,200,100,150,mouseX,mouseY,50,75);
  }

  background(bImg);
  for (let d of dumbells) {
    d.move();
    d.show();
    if (davegame.hits(d)) {
      console.log('game over');
      noLoop();
    }
  }

  davegame.show();
  davegame.move();
}
