let cnv;
let but;

function setup() {
  cnv = createCanvas(800, 600);
  strokeWeight(10);
  rect(0,0,800,600);
  cnv.parent("container");
  
  but = createButton('do nothing');
  but.style('font-size', '72px');
  but.style('padding', '1em');
  but.size(790,590);
  but.parent("container");
  but.position(5,5);
}

function draw() {}