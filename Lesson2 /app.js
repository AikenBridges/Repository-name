console.log("test....");

var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(75,50);
ctx.moveTo(75,50);
ctx.lineTo(150,75);
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke()
ctx.beginPath();
ctx.moveTo(150,75);
ctx.lineTo(225,50);
ctx.moveTo(225,50);
ctx.lineTo(300,100);
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.stroke()
ctx.fillStyle = "rgb(190,0,0)"
ctx.fillRect(100,100,100,100)
ctx.strokeStyle = "rgb(255,190,0)"
ctx.strokeRect(75,75,150,150)
ctx.clearRect(125,125,50,50)

var c1 = document.getElementById("Canvas1");
var ctx1 = c1.getContext("2d");

ctx1.fillStyle = "rgb(0,0,0)"
ctx1.fillRect(0,0,150,150)
ctx1.fillRect(150,150,150,150)

var c2 = document.getElementById("Canvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillRect(0,0,300,300)
ctx2.clearRect(20,20,120,120)
ctx2.clearRect(160,20,120,120)
ctx2.clearRect(20,160,120,120)
ctx2.clearRect(160,160,120,120)

var c3 = document.getElementById("Canvas3");
var ctx3 = c3.getContext("2d");

ctx3.fillRect(0,0,100,100)
ctx3.fillRect(200,0,100,100)
ctx3.fillRect(100,100,100,100)
ctx3.fillRect(0,200,100,100)
ctx3.fillRect(200,200,100,100)

var c4 = document.getElementById("Canvas4");
var ctx4 = c4.getContext("2d");
var boxSize = 0

for(i=0;i<8;i++){
	ctx4.fillStyle = "rgb(0,0,0)"
	boxSize = i*20
	ctx4.fillRect(0+boxSize,0+boxSize,300-boxSize,300-boxSize)

	ctx4.fillStyle = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"
	boxSize = i*20+10
	ctx4.fillRect(0+boxSize,0+boxSize,300-boxSize*2,300-boxSize*2)
}












