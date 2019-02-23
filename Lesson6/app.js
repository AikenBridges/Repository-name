// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Images
var Pacman = new Image();
Pacman.src = "PacmanRight.png"
var Ghost = new Image();
Ghost.src = "GhostRight.png"

// Width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;

// position and radius of player
var x = 300;
var y = 300;
var s = 50;

// position and radius of ghost
var ghostX = 300;
var ghostY = 300;
var ghostS = 50;

// Player speed in x-y directions
var mx = 0;
var my = 0;

// Positions, size and collision check of circle
var circleX;
var circleY;
var circleS = 20;

var circleCollision = false;

//Variable for the score
var score = 0;

// Import images onto canvas
function drawPacman(){
	ctx.drawImage(Pacman, x, y, s, s);
}

function drawDot(){
	var Dot = new Image();
	Dot.src = "Dot.png"
	ctx.drawImage(Dot, circleX, circleY, circleS, circleS);
}

function drawGhost(){
	ctx.drawImage(Ghost, ghostX, ghostY, ghostS, ghostS);
}

// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialise our animation
function init() {
	// Put circle in random position
	circleX = Math.ceil(Math.random()*(WIDTH-circleS))
	circleY = Math.ceil(Math.random()*(HEIGHT-circleS))

	// Wait for user to press keyboard 
	window.onkeydown = keydownControl;

	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}
//Get key input
function keydownControl (e){
	if(e.keyCode == 87){ //up
		mx = 0;
		my = -4;
		Pacman.src = "PacmanUp.png"

	}else if(e.keyCode == 83){ //down
		mx = 0;
		my = 4;
		Pacman.src = "PacmanDown.png"
		
	}else if(e.keyCode == 65){ //left
		mx = -4;
		my = 0;
		Pacman.src = "PacmanLeft.png"
		
	}else if(e.keyCode == 68){ //right
		mx = 4;
		my = 0;
		Pacman.src = "PacmanRight.png"
		
	}
};

// Repeated draw function
function draw() {
	clear();
	//draw images
	drawPacman();
	drawDot();

	// Make player bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - s){
		mx = -mx;
		Pacman.src = "PacmanLeft.png";
	}else if(x + mx < 0){
		mx = -mx;
		Pacman.src = "PacmanRight.png";

	} else if (y + my > WIDTH - s) {
		my = -my;
		Pacman.src = "PacmanUp.png";
	} else if (y + my < 0) {
		my = -my;
		Pacman.src = "PacmanDown.png";
	}

	// Moves our player
	x += mx;  
	y += my;

	// Check for collisions
	collisionCheck();
	nom();
}

// Function to check for ghost collisions

// function ghostCollide(){
// 	if((x+s >= circleX) && (x<=circleX+circleS) && (y+s >= circleY) && (y<=circleY+circleS)){
// 		circleCollision = true;
// 	}else{
// 		circleCollision = false;
// 	}
// }

// Function to check for collisions
function collisionCheck(){
	if((x+s >= circleX) && (x<=circleX+circleS) && (y+s >= circleY) && (y<=circleY+circleS)){
		circleCollision = true;
	}else{
		circleCollision = false;
	}
}

//Function to handle the collision
function nom(){
	if(circleCollision == true){
		circleX = Math.ceil(Math.random()*(WIDTH-circleS))
		circleY = Math.ceil(Math.random()*(HEIGHT-circleS))
		score += 1;
		document.getElementById("counter").innerHTML = "Score: "+score;
	}
}

//Function to handle the keypresses

init();