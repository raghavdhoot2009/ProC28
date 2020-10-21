const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,trees;
var Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8;
var stoneobj,man;

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
Ground =new ground(400,680,900,20);
trees =new tree(595,445,300,500);
Mango1 =new mango(595,425,50,75);
Mango2 =new mango(665,440,50,75);
Mango3 =new mango(545,405,50,75);
Mango4 =new mango(495,385,50,75);
Mango5 =new mango(570,295,50,75);
Mango6 =new mango(670,335,50,75);
Mango7 =new mango(700,375,50,75);
Mango8 =new mango(620,305,50,75);
stoneobj =new stone(140,520,50,100);
man =new boy(200,575,200,400);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(230);
Ground.display();
trees.display();
Mango1.display();
Mango2.display();
Mango3.display();
Mango4.display();
Mango5.display();
Mango6.display();
Mango7.display();
Mango8.display();
stoneobj.display();
man.display();
detectcollision(stones,mango1);
detectcollision(stones,mango2);
detectcollision(stones,mango3);
detectcollision(stones,mango4);
detectcollision(stones,mango5);

drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stoneobj.body, {x:mouseX , y:mouseY});
    
}
    
function mouseReleased(){
stoneobj.fly();
    
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
    
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}

}
    
function keypressed() {
if (keyCode === 32){
Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
man.attach(stones.body);
}
}