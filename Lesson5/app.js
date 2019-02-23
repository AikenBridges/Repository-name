var c1 = document.getElementById("canvas1");
var ctx1 = c1.getContext("2d");

const WIDTH = 600
const HEIGHT = 400

var x, y;

var mx, my;

var light = 100;

ctx1.strokeStyle = "hsl("+light+",0,0)";

function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw,10);
}

function clear(){
	ctx1.clearRect(0,0,WIDTH,HEIGHT)
}

function circle(cx,cy){
	ctx1.beginPath(0,0);
	ctx1.arc(cx, cy, 50, 0, 2 * Math.PI);
	ctx1.closePath();
	ctx1.stroke();
}

function bounce(){
	light = 100
}

function fade(){
	light = light-10
	ctx1.strokeStyle = "hsl(0,0,"+light+"%)";
}

function draw(){
	clear();

	circle(x,y);
	if(y<=0){
		my = Math.ceil(Math.random()*6)
		bounce();
	}
	if(y>=HEIGHT){
		my = Math.ceil(Math.random()*-6)
		bounce();
	}

	if(x<=0){
		mx = Math.ceil(Math.random()*8)
		bounce();
	}
	if(x>=WIDTH){
		mx = Math.ceil(Math.random()*-8)
		bounce();
	}

	x = x+mx
	y = y+my

	fade();
}

init()