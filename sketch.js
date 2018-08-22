var x=100;
var y=100;
var xspeed=4; var yspeed=3;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
background(0);
r=0;
g=random(0,255);
b=random(0,255);
stroke(255);
strokeWeight(3);

	ellipse(x,y,25,25);
	if(x>width||x<0){
		xspeed*=-1;
	}
	if(y>height||y<0)
	{
		yspeed*=-1;
	}
	x=x+xspeed;
	y=y+yspeed;
	fill(r,g,b);

}
