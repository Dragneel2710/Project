const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box2,box3,box4,box5,box6;
var pig,pig2;
var log,log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Ground(600,390,1200,20);
    pig = new Pig(810,350);
    log = new Log(810,260,300,PI/2)
    box4 = new Box(700,240,70,70);
    box5 = new Box(920,240,70,70);
    //box6 = new Ground(600,390,1200,20);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box2.display();
    box3.display();
    pig.display();
    log.display();
    box4.display();
    box5.display();
    //box6.display();
    pig2.display();
    log2.display();
}
