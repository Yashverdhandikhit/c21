var movingrect
var rect



function setup() {
  createCanvas(800,400);
  rect=createSprite(400, 200, 50, 50);
 movingrect =createSprite(200, 200, 50, 50);


}

function draw() {
  background("red"); 
  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  movingrect.shapeColor="green"
    
  if(isTouching(movingrect,rect)){
    movingrect.shapeColor="yellow"
    

  }
  drawSprites();
}

