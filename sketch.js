var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var score =0;
var particles;
var plinkos = [];
var divisions=[];
var turn =0;
var gameState="start";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white");
  text("Score : "+score,20,30);
  text("500", 5,550);
  text("500", 85,550);
  text("500", 165,550);
  text("500", 245,550);
  text("200", 325,550);
  text("200", 405,550);
  text("200", 485,550);
  text("100", 565,550);
  text("100", 645,550);
  text("100", 725,550);
 
if(gameState=="end"){
  textSize(70);
  text("gameOver",150,250);
  score=0;
}
if(particles!=null){
  particles.display();
if(particles.body.position.y>600){
  if(particles.body.position.x<300){
  score=score+500;
  particle=null
  if(turn>=5){
    gameState="end";
  }
  }
  if(particles.body.position.x>300&&particles.body.position.x<500){
    score=score+200;
    particle=null
    if(turn>=5){
      gameState="end";
    }
    }
    if(particles.body.position.x>500){
      score=score+100;
      particle=null
      if(turn>=5){
        gameState="end";
      }
      }
}




}





  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!=="end"){
turn++
particles=new Particle(mouseX,mouseY,10);
  }
}
