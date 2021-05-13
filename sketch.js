var cyclist, cyclistImg, cyclistImg2, jumpImg;
var bg,bgImg;
var road, roadImg;
var invisible_ground, edges;
var obstacle1,obstacle2;
var obstacle1Img,obstacle2Img,obstacle3Img,obstacle4Img,obstacle5Img;

function preload(){

  bgImg = loadImage("bg.jpg");
  roadImg = loadImage("road.jpg");
  cyclistImg = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png");
  //cyclistImg2 = loadAnimation("cyclist1.png","cyclist2.png","cyclist3.png","cyclist4.png","cyclist5.png","cyclist6.png","cyclist7.png","cyclist8.png","cyclist9.png","cyclist10.png","cyclist11.png","cyclist12.png","cyclist13.png","cyclist14.png","cyclist15.png","cyclist16.png");
  //jumpImg = loadAnimation("flip1.png","flip2.png","flip3.png","flip4.png","flip5.png","flip6.png","flip7.png","flip8.png");

  obstacle1Img = loadImage("traffic_cone.png");
  obstacle2Img = loadImage("box.png");
  //obstacle3Img = loadImage("dustbin.png");

  obstacle4Img = loadImage("barrier.png");
  obstacle5Img = loadImage("spikes1.png");

}

function setup() {
  createCanvas(1000,500);
  
  bg = createSprite(500,50,1000,400);
  bg.addImage(bgImg);
  bg.scale = 4.32;
  bg.velocityX = -2;

  road = createSprite(500,460,1000,80);
  road.addImage(roadImg);
  road.scale = 1.2;

  invisible_ground = createSprite(500,460,1000,10);
  invisible_ground.visible = false;

  cyclist = createSprite(120,370,50,50);
  cyclist.addAnimation("riding",cyclistImg);
  cyclist.scale = 1.4;
  
}

function draw() {
  background(235);  

  if(bg.x<0){
    bg.x = bg.width/2;
  }

  if(keyDown(UP_ARROW)){
    cyclist.velocityY = -12;
   // cyclist.changeAnimation("jumping",jumpImg);
  }

  cyclist.velocityY += 0.6;
  
  edges = createEdgeSprites();

  cyclist.collide(edges);
  cyclist.collide(invisible_ground);

  spawnObstacles1();
 // spawnObstacles2();

  drawSprites();
}

function spawnObstacles1(){
  if(frameCount%350===0){
  obstacle1 = createSprite(Math.round(random(900,1000)),440,50,50);
  obstacle1.velocityX = -2;
  obstacle1.scale = 1.5;
  obstacle1.lifetime = 500;
  //cyclist.y = obstacle1.y;
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1 : obstacle1.addImage(obstacle1Img);
    break;
    case 2 : obstacle1.addImage(obstacle2Img);
    break;
    //case 3 : obstacle1.addImage(obstacle3Img);
    //break;
    default : break;

   }
  }
}

/*function spawnObstacles2(){
  if(frameCount%650===0){
    obstacle2 = createSprite(Math.round(random(900,1000)),440,50,50);
    obstacle2.velocityX = -2;
    obstacle2.scale = 1.5;
    obstacle2.lifetime = 500;
    //cyclist.y = obstacle2.y;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : obstacle2.addImage(obstacle4Img);
      break;
      case 2 : obstacle2.addImage(obstacle5Img);
      break;
      default : break;
     }
    }
}*/