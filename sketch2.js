var beginX = 750.0; // Initial x-coordinate
var beginY = 350.0; // Initial y-coordinate
var endX = 750; // Final x-coordinate
var endY = 350.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
var step = 0.4; // Size of each step along the path
var pct = 0.0; // Percentage traveled (0.0 to 1.0)

function preload(){
img1=loadImage("SpaceImg.jpg");
img2=loadImage("Boss'sMinions!!.gif");
img3=loadImage("NewBoss(1).png");
img4=loadImage("Spaceship(PC).png");
img5=loadImage("Minion.png");
img6=loadImage("bullet1.png");
}
function setup() {
  createCanvas(1600,700);
  Player1 = createSprite(750, 350);
  Player1.addImage(img4)
  Player1.scale=0.6;

 
 
}


function draw() {
  background(img1);  

  UFO();
  Droid();
  XanderRocks();

  Player1.pointTo(mouseX,mouseY)

  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    //y = beginY + pow(pct, exponent) * distY;
    y = beginY + pct * distY;

  }

  

  bullet1 = createSprite(x, y);
 bullet1.addImage(img6)
 bullet1.scale=0.2;
 bullet1.lifetime=1;

 bullet1.pointTo(mouseX,mouseY)
 
 if(bullet1.x===mouseX || bullet1.y===mouseY){
   console.log("reached");
   bullet1.visible=false;
  //bullet1.destroy();

  
}

  distX = endX - beginX;
  distY = endY - beginY;

drawSprites();
}

function Droid() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    Player3 = createSprite(1400, 450);
    Player3.addImage(img2)
    Player3.scale=0.4;

    Player3.y = Math.round(random(100,600));
    Player3.velocityX = -10;
    
     //assign lifetime to the variable
    Player3.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
  
}

function UFO() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    
    Player4 = createSprite(1400,100);
    Player4.addImage(img5)
    Player4.scale=0.2;

    Player4.x = Math.round(random(100,1400));
    Player4.y = Math.round(random(100,600));
    Player4.velocityX = Math.round(random(2,5));
    Player4.velocityY = Math.round(random(2,5));
     //assign lifetime to the variable
    Player4.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}

function XanderRocks() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    
    Player2 = createSprite(750,5);
    Player2.addImage(img3)
    Player2.scale=0.5;

    Player2.x = Math.round(random(250,1250));
    
    Player2.velocityY = Math.round(random(1,2));
    
     //assign lifetime to the variable
    Player2.lifetime = 300;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}

function mouseClicked(){
//  bullet1 = createSprite(750, 350);
//  bullet1.addImage(img6)
//  bullet1.scale=0.2;

// bullet1.pointTo(mouseX,mouseY)
  pct = 0.0;
  beginX = 750;
  beginY = 350;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;

//  if(bullet1.x<mouseX){
//   bullet1.mirrorX(bullet1.mirrorX() * -20);
//  }
//  else{
//   bullet1.mirrorX(bullet1.mirrorX() * +20);
//  }

 
 }