var movingRect, fixedRect;
var rect1, rect2, rect3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 2
  fixedRect.velocityY = 2

  movingRect = createSprite(10, 10, 30, 40);
  movingRect.shapeColor = "green";

  rect1 = createSprite(200, 50, 30, 100);
  rect1.shapeColor = "pink";

  rect2 = createSprite(600, 100, 100, 100);
  rect2.shapeColor = "yellow";

  rect3 = createSprite(740,64,40,100);
  rect3.shapeColor = "white";

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if( isTouching(rect1, movingRect)) {
    rect1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if ( isTouching(movingRect, rect2) ){
    rect2.shapeColor = "violet"
    movingRect.shapeColor = "blue"
  }
  else{
    rect1.shapeColor = "pink";
    movingRect.shapeColor = "green";
    rect2.shapeColor = "yellow";
    rect3.shapeColor = "white";

  }

  bounceoff (movingRect , fixedRect)
  drawSprites();
}

