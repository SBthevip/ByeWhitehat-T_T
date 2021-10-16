var bullet1,Player4,Player3,Player2,Player1,ended;
var Dgroup,Bgroup,Xgroup,Ugroup,End;
var gameState='play';
var score=0;


function preload(){
img1=loadImage("SpaceImg.jpg");
img2=loadImage("Boss'sMinions!!.png");
img3=loadImage("NewBoss(1).png");
img4=loadImage("Spaceship(PC).png");
img5=loadImage("Minion.png");
img6=loadImage("bullet1.png");
blast=loadImage("blast.png");
ended=loadImage("end.png");
}
function setup() {
  createCanvas(1600,700);
  Player1 = createSprite(750, 350);
  Player1.addImage(img4)
  Player1.scale=0.6;

  End = createSprite(750, 350);
  End.addImage(ended)
  End.visible=false;

  Dgroup = new Group();
  Bgroup = new Group();
  Ugroup = new Group();
  Xgroup = new Group();
}


function draw() {
  background(img1);  


  if(gameState==='play'){

  
  UFO();
  Droid();
  XanderRocks();

  Player1.pointTo(mouseX,mouseY)
 
  if(mouseIsPressed == true){ 
  
      bullet1 = createSprite(750, 350);
      bullet1.addImage(img6)
      bullet1.scale=0.08;

      bullet1.depth = Player1.depth;
      Player1.depth = Player1.depth + 1;

      bullet1.pointTo(mouseX,mouseY)

      var direction=(atan2(World.mouseY-bullet1.y, World.mouseX-bullet1.x));
      
      bullet1.setSpeedAndDirection(50, direction);
      bullet1.rotateToDirection=true;
 
   Bgroup.add(bullet1);
 }

  if(Dgroup.isTouching(Bgroup)){
    Dgroup.destroyEach();
    score = score+1;
  }
  if(Xgroup.isTouching(Bgroup)){
    Xgroup.destroyEach();
    score = score+5
}
    if(Ugroup.isTouching(Bgroup)){
      Ugroup.destroyEach();
      score = score+2
  }
  if(Ugroup.isTouching(Player1)){
    gameState='end';
    //Player1.addImage(blast);
}
  if(Dgroup.isTouching(Player1)){
  gameState='end';
  //Player1.addImage(blast);
}
  if(Xgroup.isTouching(Player1)){
      gameState='end';
      //Player1.addImage(blast);
  }

  if(gameState==='end'){
    Dgroup.setVelocityEach(0);
    //Player1.Delay=185;
    End.visible=true;
  }

  }
drawSprites();
textSize(35)
fill("White")
text("score:"+score,1000,100)
}

function Droid() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    Player3 = createSprite(1400, 450);
    Player3.addImage(img2)
    Player3.scale=0.4;

    
    Player3.y = Math.round(random(100,600));
    Player3.velocityX = -20;
    Player3.rotateToDirection=true;
    Player3.pointTo(Player1.x,Player1.y)
     //assign lifetime to the variable
    Player3.lifetime = 200;
    Dgroup.add(Player3);
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
  
}

function UFO() {
  
  if (frameCount % 60 === 0) {
    
    Player4 = createSprite(1400,100);
    Player4.addImage(img5)
    Player4.scale=0.2;

    Player4.x = Math.round(random(100,500));
    Player4.y = Math.round(random(100,600));
    Player4.velocityX = Math.round(random(2,5));
    Player4.velocityY = Math.round(random(2,5));
     //assign lifetime to the variable
    Player4.lifetime = 200;
    Ugroup.add(Player4);
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}

function XanderRocks() {
  //write code here to spawn the clouds
  if (frameCount % 500 === 0) {
    
    Player2 = createSprite(750,5);
    Player2.addImage(img3)
    Player2.scale=0.5;

    Player2.x = Math.round(random(250,1250));
    
    Player2.velocityY = Math.round(random(4,5));
    
     //assign lifetime to the variable
    Player2.lifetime = 300;
    Xgroup.add(Player2);
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}

