const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,angle;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var circle_options = {
    restitution:0
}
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    box1 = Bodies.rectangle(200,100,50,50,circle_options);
    box2 = Bodies.rectangle(220,135,50,50,circle_options);
    World.add(world,ground);
    circle = Bodies.circle(300,200,20,circle_options)
   World.add(world,circle);
World.add(world,box1)
World.add(world,box2)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    angle = box1.angle;
    rectMode(CENTER);
    fill("yellow")
    rect(ground.position.x,ground.position.y,400,20);
    rotate(angle)
    rect(box1.position.x,box1.position.y,50,50);
    rect(box2.position.x,box2.position.y,50,50);
    
   ellipseMode(RADIUS)
   fill("red")
    ellipse(circle.position.x,circle.position.y,20,20)

}