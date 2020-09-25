var bullet,wall
var speed,weight
var thickness;


function setup()
{
  createCanvas(1200,600);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
bullet=createSprite(50,200,50,50)
bullet.velocityX=speed;
wall=createSprite(600,200,thickness,height/2)
}
function draw()
{
  background(0);
if(hascollided (bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*width*speed*speed/(thickness*thickness*thickness)
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}

drawSprites();
}
function hascollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}


