var player, playerImg;
var backgroundImg;

function preload() {
 backgroundImg = loadImage("background.png");
  playerImg = loadAnimation("Player/1.png, Player/2.png, Player/3.png, Player/4.png, Player/5.png, Player/6.png");
}
function setup() {
  createCanvas(1000,500);
  player = createSprite(500, 350, 50, 20);
  player = addImage(playerImg)
}

function draw() {
  background(255,255,255);  

if (mousePressedOver(backgroungImg)) {
  
}
  drawSprites();
}