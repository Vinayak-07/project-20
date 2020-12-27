var wall;
var car;
var speed;
var weight;

function setup() {
  createCanvas(1200,400);
  speed = random(55,90);
  weight = random(900,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100,200,60,height/2);
}

function draw() {
  background("black");  
  car.velocityX = speed;
  console.log(weight,speed);
  if(wall.x - car.x < (car.width + car.width)/2){
     car.velocityX = 0;
     var deformation  = 0.5 * weight * speed * speed /22500;
     if(deformation >180){
       car.shapeColor = color(255,0,0);
     }
     if(deformation<180 && deformation > 100){
       car.shapeColor = color(230,230,0);
     }
     if(deformation<100){
      car.shapeColor = color(0,225,0);;
    }
    }
  drawSprites();
}