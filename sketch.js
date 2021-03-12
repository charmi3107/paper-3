
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbinObject, paperObject,Ground	
var world;


function setup() {
	createCanvas(2000, 1600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	Ground=new ground(width/2,670,width,70);
	dustbinObject=new dustbin(1200,650);
	//Create a Ground
	
	Slingshot= new Slingshot(paperObject.body,{ x:200 ,y:100});
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
 
  Slingshot.display();
  paperObject.display();
  Ground.display();
  dustbinObject.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}
function mouseDragged(){

	Matter.Body.setPosition(paperObject.body,{x:mouseX ,y:mouseY});
	
	
	}
	function mouseReleased(){
	
	Slingshot.fly()
	
	}




