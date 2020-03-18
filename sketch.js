const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stone,stone2,stone3,stone4,stone5,stone6;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(200,200,20,200);
    stone2 = new Stone(200,230,20,100);
    stone3 = new Stone(200,170,20,100);
    stone4 = new Stone(200,140,20,150);
    stone5 = new Stone(200,260,20,150);
    stone6 = new Stone(200,390,1000,100);
}
 
function draw() {
    background(50);
    Engine.update(engine);
    stone.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
}
 
