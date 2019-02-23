var game = new Phaser.game(800,600, Phaser.AUTO,'', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
	game.load.image ("sky","assets/sky.png");
	game.load.image ("platform","assets/platform.png");
	game.load.image ("star","assets/star.png");
	game.load.spritesheet ("player","assets/dude.png",32,48);
	game.load.spritesheet ("baddie","assets/baddie.png",32,32);
}
function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.add.sprite(0,0,"sky");

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, "platform");
	ground.scale.setTo(2,2);
	var ledgeL = platforms.create(-100, 300, "platform");
	ledgeL.body.immovable = true;
	var ledgeR = platforms.create(400, 400, "platform");
	ledgeR.body.immovable = true;

	var style = {font: "bold 32px Arial", fill:"#fff"}
	scorelabel = game.add.text(300,560,"score: ", style)
	scoretext = game.add.text(300,560,score, style)
	lifelabel = game.add.text(10,5,"lives: ", style)
	lifetext = game.add.text(120,5,life, style)
}
function update(){

}