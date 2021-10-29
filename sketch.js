var mouse, cat, cheese;
var wall1, wall2, wall3, wall4, wall5, wall5, wall6, wall7, wall8, wall9,
 wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23;
var wallGroup;
var mouseIMG1, mouseAnimation1, catAnimation1, catIMG2, cheeseImage;
var catAnimation1right

function preload(){
  mouseIMG1 = loadImage("mouse4.png");
  mouseAnimation1 = loadAnimation("mouse2.png", "mouse3.png");
  catAnimation1 = loadAnimation("cat2.png", "cat3.png");
  catAnimation1right = loadAnimation("cat2right.png", "cat3right.png");
  catIMG2 = loadImage("cat4.png");
}

function setup() {
  createCanvas(1000,500);

  wallGroup = new Group();

  wall1 = new Wall(500,25, 1000, 50);
  wall2 = new Wall(25, 300, 50, 400);
  wall2.shapeColor = "pink";
  wall3 = new Wall(175, 225, 250, 50);
  wall4 = new Wall(125, 100, 50, 100);
  wall5 = new Wall(200, 125, 100, 50);
  wall6 = new Wall(425, 125, 250, 50);
  wall7 = new Wall(725, 125, 250, 50);
  wall8 = new Wall(950, 125, 100, 50);
  wall9 = new Wall(325, 300, 50, 300);
  wall10 = new Wall(525, 175, 50, 50);
  wall11 = new Wall(175, 325, 150, 50);
  wall12 = new Wall(125, 425, 50, 150);
  wall13 = new Wall(225, 425, 50, 150);
  wall14 = new Wall(575, 225, 350, 50);
  wall15 = new Wall(725, 300, 50, 100);
  wall16 = new Wall(525, 375, 50, 150);
  wall17 = new Wall(600, 325, 100, 50);
  wall18 = new Wall(625, 400, 50, 100);
  wall19 = new Wall(425, 375, 50, 250);
  wall20 = new Wall(725, 425, 150, 50);
  wall21 = new Wall(825, 325, 50, 350);
  wall22 = new Wall(925, 350, 50, 300);
  wall23 = new Wall(625, 100, 50, 100);

  mouse = createSprite(25, 75, 30, 30);
  mouse.addImage(mouseIMG1);
  mouse.scale = 0.04;
  mouse.debug = true;
  mouse.setCollider('rectangle', 0, 0, 30, 30);

  cat = createSprite(675,75,20,20);
  cat.addAnimation("catProtectingCheeseRight", catAnimation1right);
  cat.addAnimation("catProtectingCheese", catAnimation1);
  cat.scale = 0.04;
  cat.velocityX = 3
}

function draw() {
  background("black");
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();

  if(keyIsDown(RIGHT_ARROW)){
    mouse.x = mouse.x + 4
  }

  if(keyIsDown(LEFT_ARROW)){
    mouse.x = mouse.x - 4
  }

  if(keyIsDown(UP_ARROW)){
    mouse.y = mouse.y - 4
  }

  if(keyIsDown(DOWN_ARROW)){
    mouse.y = mouse.y + 4
  }

  // if(wallGroup.isTouching(mouse)){
  //   mouse.x = mouse.x - 10
  // }

  if(wallGroup.isTouching(mouse)){
    wallGroup.displace(mouse);
  }

  if(mouse.x < 0 && mouse.y < 100){
    mouse.x = 980;
    mouse.y = 80;
  }

  if(cat.x > 975){
    cat.velocityX = -3
    cat.changeAnimation("catProtectingCheese", catAnimation1);
  }

  if(cat.x < 675){
    cat.velocityX = +3
    cat.changeAnimation("catProtectingCheeseRight", catAnimation1right);
  }

  drawSprites();
}