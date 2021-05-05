var canvas, backgroundImage;
var player,playerImage;
var player_running;
var vamp;
var obstacleImage,coinImage,ob2Image,ob3Image,ob4Image;
var invisibleGround;
var shieldImage,jetImage,magnetImage;
var pw1,pw2,pw3;

function preload(){
backgroundImage = loadImage('bg.jpg');
player_running = loadAnimation('player1.png','player2.png','player3.png','player4.png');
vampImage = loadImage('vamp.png');

//coin image
coinImage = loadImage('coin.png');

//obstacles images
ob1Image = loadImage('ob1.png');
ob2Image = loadImage('ob2.png');
ob3Image = loadImage('ob3.png');

//powerups images
shieldImage = loadImage('shield.png');
magnetImage = loadImage('magnet.png');
jetImage = loadImage('jet.png');



}

function setup(){
  canvas = createCanvas(1600,800);
  ground = createSprite(800,400,1600,800);
  ground.addImage(backgroundImage);
  ground.x = ground.width/2;
  ground.scale = 1.5;

  player = createSprite(300,680,100,100);
  player.addAnimation("running",player_running);
  player.scale = 0.3;
  

  vamp = createSprite(100,680,100,100);
  vamp.addImage(vampImage);
  vamp.scale = 0.35;

  coinGroup = createGroup();

  invisibleGround = createSprite(800,800,1600,100);
  invisibleGround.visible = false;
}


function draw(){
  background(255);
  
  
  ground.velocityX = -7;

  if(ground.x < 480){
ground.x = ground.width/2;

  }

  if(player.isTouching(coinGroup)){

    coinGroup.destroyEach();

  }

    if(keyDown("space")){

      player.velocityY = -15;
      
    }
  
player.velocityY = player.velocityY + 0.8;
player.collide(invisibleGround);

//Image sprites
pw1 = createSprite(100,100,70,70)
pw1.addImage(shieldImage);
pw1.scale = 0.5;
pw1.visible = false;

 pw2 = createSprite(300,100,70,70)
pw2.addImage(jetImage);
pw2.scale = 0.5;
pw2.visible= false;

 pw3 = createSprite(500,100,70,70)
pw3.addImage(magnetImage);
pw3.scale = 0.5;
pw3.visible = false;

//functions
  spawnCoins();
  spawnObstacles();
  spawnPowerups();
  
  drawSprites();

 
}
function spawnObstacles(){
  var rand1 = Math.round(random(60,180))
  if(frameCount % rand1 === 0){
  var obstacle = createSprite(800,700,50,50);
  obstacle.scale = 0.5;
  obstacle.velocityX = -7;
  var rand = Math.round(random(1,3));
  switch(rand){

    case 1 : obstacle.addImage(ob1Image);

    obstacle.scale = 0.25;
    
    break;

    case 2 : obstacle.addImage(ob2Image);

    obstacle.scale = 0.2;

    break;

    case 3 : obstacle.addImage(ob3Image);

    obstacle.scale = 0.2;

    break;

    default : break

  }

  }

}

function spawnCoins(){
  var rand = Math.round(random(50,120))
  if(frameCount % rand === 0){
  var coin = createSprite(600,700,30,30);
  coin.addImage(coinImage);
  coin.scale = 0.07;
  coin.velocityX = -5;

  coinGroup.add(coin);
  
  }
}

function spawnPowerups(){
  var rand2 = Math.round(random(240,720))
  if(frameCount % rand2 === 0){
    var powerup = createSprite(800,600,50,50);
    powerup.scale = 0.5;
    powerup.velocityX = -5;

    var rand = Math.round(random(1,3))
    switch (rand){

      case 1 : powerup.addImage(shieldImage);
      if(player.isTouching(powerup)){
        console.log("pw1 here")
        pw1.visible = true;


      }
    
      break;

      case 2 : powerup.addImage(jetImage);
      if(player.isTouching(powerup)){
        console.log("pw2 here")
        pw2.visible = true;
      }
      break;

      case 3 : powerup.addImage(magnetImage);
      if(player.isTouching(powerup)){
        console.log("pw3 here")
        pw3.visible = true;
      }
      break;

      default : break
    }
    
    
    
  }

}