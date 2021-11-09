var sea, seaIMG

var ship, shipIMG

function preload(){
seaIMG = loadImage("sea.png");
shipIMG = loadAnimation("ship-1.png", "ship-2.png");

}

function setup(){
  background("blue"); 
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaIMG);
  sea.velocityX = -5;
  
  ship = createSprite(200,300,30,30);
  ship.addAnimation("movingShip", shipIMG);
  ship.scale = 0.25
  
}

function draw() {
  sea.velocityX = -3
  background(0);
    drawSprites();

  
}
