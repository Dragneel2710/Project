var earth, sun ;

function preload() {
sun = LoadImage("sun.png");
earth =  LoadImage("earth.png")
}

function setup() {
  createCanvas(400,400);
  sun = createSprites(200,200,20,20);
  sun.scale = sun.scale + 1;
  earth = createSprites(300,200,20,20);
  earth.scale = 0.5;
}

function draw() {
  background(0,0,0); 
  sun.scale = sun.scale + 1;
  drawSprites();
}