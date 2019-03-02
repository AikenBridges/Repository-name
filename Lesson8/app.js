var game = new Phaser.Game(800,600, Phaser.AUTO,'', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
	game.load.image ('sky','assets/sky.png');
	game.load.image ('platform','assets/platform.png');
	game.load.image ('star','assets/star.png');
	game.load.spritesheet ('dude','assets/dude.png',32,48);
	game.load.spritesheet ('baddie','assets/baddie.png',32,32);
}
function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.add.sprite(0,0,'sky');

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'platform');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	var ledge = platforms.create(400, 400, 'platform');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 250, 'platform');
	ledge.body.immovable = true;

	var style = {font: 'bold 32px Arial', fill:'#fff'}
	scorelabel = game.add.text(300,560,'score: ', style)
	scoretext = game.add.text(420,560,score, style)
	scorelabel.setShadow(3,3,"rgba(0,0,0,0.5",2)
	scoretext.setShadow(3,3,"rgba(0,0,0,0.5",2)

	lifelabel = game.add.text(10,5,'lives: ', style)
	lifetext = game.add.text(120,5,life, style)
	lifelabel.setShadow(3,3,"rgba(0,0,0,0.5",2)
	lifetext.setShadow(3,3,"rgba(0,0,0,0.5",2)

	player = game.add.sprite(32, 400, "dude");
	player.animations.add("left", [0,1,2,3],10,true);
	player.animations.add("right", [5,6,7,8],10,true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	enemy = game.add.sprite(760, 20, "baddie");
	enemy.animations.add("left", [0,1,],10,true);
	enemy.animations.add("right", [2,3],10,true);
	game.physics.arcade.enable(enemy);
	enemy.body.bounce.y = 0.2;
	enemy.body.gravity.y = 300;
	enemy.body.collideWorldBounds = true;

	stars = game.add.physicsGroup();
	stars.enableBody = true;
	var star = stars.create(0, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.7;
	star = stars.create(67, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.3;
	star = stars.create(133, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.3;
	star = stars.create(200, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.7;
	star = stars.create(267, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.4;
	star = stars.create(333, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.7;
	star = stars.create(400, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.8;
	star = stars.create(467, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.1;
	star = stars.create(533, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.4;
	star = stars.create(600, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.6;
	star = stars.create(667, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.8;
	star = stars.create(733, 0, 'star');
	star.body.gravity.y = 300;
	star.body.bounce.y = 0.4;

	cursors = game.input.keyboard.createCursorKeys();
}
function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.collide(enemy, platforms);

	player.body.velocity.x = 0;

	if(cursors.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play("left");
	} else if(cursors.right.isDown){
		player.body.velocity.x = 150;
		player.animations.play("right");
	} else {
		player.animations.stop();
		player.frame = 4;
	}
	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}
}

function moveEnemy(){
	if(enemy.x>759){
		enemy.body.velocity.x = -120;
		enemy.animations.play("left");
	}else if(enemy.x<405){
		enemy.body.velocity.x = 120;
		enemy.animations.play("right");
	}
}