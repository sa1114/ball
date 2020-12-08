const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var t1,t2,t3,floor;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
t1=new Trash(1060,370,250,20);
t2=new Trash(1188,290,20,140);
t3=new Trash(926,290,20,140);
paper=new Trash(100,300,30);
	
floor=new Floor(width / 2, 380, width, 30,);

	Engine.run(engine);
  
}

function draw() {      
  background(0);
  
  paper.display();
  floor.display();
  t1.display();
  t2.display();
  t3.display();
  

 
}
function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{ x: 185,y :-185});
    }
}
