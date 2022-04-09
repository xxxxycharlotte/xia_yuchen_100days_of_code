var x=200;
var y=200;
var Vx=2;
var Vy=3;
 
function setup() { 
  createCanvas(400, 400);
} 
 
function draw() { 
  background(220);
  ellipse(x,y,20,20);
  x+=Vx;
  y+=Vy;
	if(x>width||x<0){
		Vx*=-1;
  }
  if(y>height||y<0){
		Vy*=-1;
  }
}

