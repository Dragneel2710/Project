const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine;
var world;
var body;
var ground

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 var option2 = {
   restitution : 1, density : 10
 }
 body = Bodies.rectangle(200,200,20,20,option2);
 var options = {
    isStatic : true
 }
 ground = Bodies.rectangle(200,380,300,1,options);
 World.add(world,body);
 World.add(world,ground);
 console.log(body.position.x);
}

function draw() {
  background(255,0,0);  
 Engine.update(engine);
  rectMode(CENTER);
  rect(body.position.x,body.position.y,50,50);
  rect(ground.position.x,ground.position.y,500,10)

}