
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, dustbin1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	//Create the Bodies Here.

		groundSprite = createSprite(width/2, height-28, width, 30);
		groundSprite.shapeColor = "green";
	
		dustbin1 = createSprite(width/1.2,height-30,170,20);
		dustbin1.shapeColor = "yellow";

		dustbin2 = createSprite(width/1.055,height-120,20,200);
		dustbin2.shapeColor = "yellow";

		dustbin3 = createSprite(width/1.36,height-120,20,200)
		dustbin3.shapeColor = "yellow";

		engine = Engine.create();
		world = engine.world;

		ground = Bodies.rectangle(width/2,400,width,30,{restitution: 0.4, isStatic:true});
		World.add(world, ground);

		dustbin1 = Bodies.rectangle(width/2,height-30,170,20,{restitution: 0.4, isStatic:true});
		World.add(world, dustbin1);

		class Paper{
			options = {
				isStatic:false,
				restitution: 0.3,
				friction: 0.5,
				destiny:1.2
			}
			paper = Bodies.circle(100,100,25,[options], [maxSides]);
		}
		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.postion,{x:85,y:-85});
	}
}



