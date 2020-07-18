
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint=Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(20,200,2000,100);

  bob1= new Ball(100,650,50,100);
  bob2= new Ball(300,650,50,100);
  bob3= new Ball( 500,650,50,100);
  bob4= new Ball(700,650,50,100);
  bob5=new Ball(900,650,50,100);

  rope1=new Line(bob1.body,ground.body);
  rope2=new Line(bob2.body,ground.body);
  rope3=new Line(bob3.body,ground.body);
  rope4=new Line(bob4.body,ground.body);
  rope5=new Line(bob5.body,ground.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



