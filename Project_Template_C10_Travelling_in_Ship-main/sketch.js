var ship,ship_shaking,edges,baground
var ground
function preload(){
ship_shaking=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
baground=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  ground=createSprite(400,200)
  ground.velocityX=-6
  ground.addImage("sea",baground)
  ground.scale=0.3
 
 
 ship=createSprite(250,250,200,150)
  ship.addAnimation("shaking",ship_shaking)
  ship.scale=0.2


}

function draw() {
  background("white");
   ground.velocityX=-6

  if(ground.x<0){  
    ground.x=ground.width/8
  }
 drawSprites();
}