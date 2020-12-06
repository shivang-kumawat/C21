var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  

  o1 = createSprite(600, 200, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  o2 = createSprite(800, 200,80,30);
  o2.shapeColor = "green";
  o2.debug = true;
}

function draw() {
  background(0);  
 
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 
  if(isTouching(movingRect,o2)){
   o2.shapeColor = "red";
    movingRect.shapeColor = "red";
    }
    else{
      movingRect.shapeColor = "green";
      o2.shapeColor = "green";
    }
 // BounceOff();

 
  drawSprites();
}

