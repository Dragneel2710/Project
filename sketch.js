var R1;
var R2;
var R;
var B;

function setup() {
  createCanvas(1200,800);
  R1 = createSprite(200, 200, 50, 80);
  R2 = createSprite(400,200,80,30);
  R = "red";
  B = "blue";
}

function draw() {
  background(0,0,0);  

 R2.x = World.mouseX;
 R2.y = World.mouseY;

 console.log(R1.width/2 + R2.width/2);

 if (R2.x - R1.x < R1.width/2 + R2.width/2 && R1.x - R2.x < R2.width/2 + R1.width/2 && R2.y - R1.y < R1.height/2 + R2.height/2 && R1.y - R2.y < R2.height/2 + R1.height/2 ){
   R1.shapeColor = "Blue";
   R2.shapeColor = "Red";
   background(World.mouseX,World.mouseY,255);
 }

 else {
   R1.shapeColor = "Grey";
   R2.shapeColor = "Grey";
   background(World.mouseY,0,World.mouseX);
 }

  drawSprites();
}