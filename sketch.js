
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,background,backgroundImage;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage = loadImage("pngtree-mountain-forest-pine-forest-natural-png-image_467883.jpg");
}



function setup() {
  
   background = createSprite (0,00);
 background.addImage(backgroundImage);
 background.scale = 2.2;
  background.velocityX = -2;
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -16;
 
 obstacleGroup = new Group();
 foodGroup = new Group();
}


function draw() {
 createCanvas(400, 400);
 
  drawSprites();
  if(background.x<0){
    background.x = background.width/2;
   }
   if (ground.x < 100){
      ground.x = 200;
    }
  
   if(keyDown("space") && monkey.y >= 290) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  monkey .collide(ground);
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  obstacle();
  food();
}

function obstacle(){
   if(frameCount % 300 === 0) {
   var obstacles = createSprite(310,310,10,40);
   obstacles.addImage(obstacleImage);
     obstacles.scale = 0.2;
     obstacles.velocityX = -5;
     obstacles.lifetime = 300;
     obstacleGroup.add(obstacles);
   }
}

function food(){
  if(frameCount % 80===0){
  var food = createSprite(300,300,0,0);
  food.addImage(bananaImage);
  food.scale = 0.1;
  food.y= Math.round(random(250,330));
  food.velocityX = -3;
  food.lifetime = 300;
  foodGroup.add(food);
  }
}


