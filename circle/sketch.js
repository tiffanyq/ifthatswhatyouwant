let cnv;
let circlesButton, squaresButton, noneButton;

function setup() {
  cnv = createCanvas(800, 600);
  cnv.parent("container");
  rewriteQuestion();
  
  circlesButton = createButton('circles');
  circlesButton.style('font-size', '24px');
  circlesButton.parent("container");
  circlesButton.position(20,80);
  circlesButton.mousePressed(circles);

  squaresButton = createButton('squares');
  squaresButton.style('font-size', '24px');
  squaresButton.parent("container");
  squaresButton.position(120,80);
  squaresButton.mousePressed(squares);

  noneButton = createButton('neither');
  noneButton.style('font-size', '24px');
  noneButton.parent("container");
  noneButton.position(235,80);
  noneButton.mousePressed(neither);
}

function draw() {}

function circles() {
  turnOffButtons();
  const constval = random(255);
  for (let _ = 0; _ < 1000; _++) {
    delayOne(1,constval);
  }
  for (let _ = 0; _ < 1000; _++) {
    delayTwo(1,constval);
  }
  for (let _ = 0; _ < 1000; _++) {
    delayThree(1,constval);
  }
  turnOnButtons();
}

function squares() {
  turnOffButtons();
  const constval = random(255);
  for (let _ = 0; _ < 1000; _++) {
    delayOne(2,constval);
  }
  for (let _ = 0; _ < 1000; _++) {
    delayTwo(2,constval);
  }
  for (let _ = 0; _ < 1000; _++) {
    delayThree(2,constval);
  }
  turnOnButtons();
}

function delayOne(shape, constval) {
  setTimeout(() => {
    rewriteQuestion();
    fill(random(255),constval,random(255));
    if (shape === 1) {
      circle(random(800), random(600),random(75));
    } else {
      square(random(800), random(600),random(75));
    }
  }, 500);
}

function delayTwo(shape, constval) {
  setTimeout(() => {
    rewriteQuestion();
    fill(constval,random(255),random(255));
    if (shape === 1) {
      circle(random(800), random(600),random(25));
    } else {
      square(random(800), random(600),random(25));
    }
  }, 500);
}

function delayThree(shape, constval) {
  setTimeout(() => {
    rewriteQuestion();
    fill(random(255),random(255),constval);
    if (shape === 1) {
      circle(random(800), random(600),random(10));
    } else {
      square(random(800), random(600),random(10));
    }
  }, 500);
}

function neither(){
  clear();
  rewriteQuestion();
  textSize(72);
  text('okay :)', 200, 200);
  
}

function rewriteQuestion() {
  stroke(255);
  strokeWeight(3);
  textSize(36);
  fill(0);
  text('do you want circles or squares?', 20, 50);
  strokeWeight(0);
}

function turnOffButtons() {
  circlesButton.attribute('disabled', '');
  squaresButton.attribute('disabled', '');
  noneButton.attribute('disabled', '');
}

function turnOnButtons() {
  setTimeout(() => {
    circlesButton.removeAttribute('disabled');
    squaresButton.removeAttribute('disabled');
    noneButton.removeAttribute('disabled');
  }, 2500);
}