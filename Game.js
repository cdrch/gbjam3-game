
BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

// Global Variables
var map;
var layer_back3;
var layer_back2;
var layer_back1;
var layer_mid;
var layer_fore1;
var layer_fore2;
var layer_fore3;

var player;
var cursors;

// Global Statics

BasicGame.Game.prototype = {

	create: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		
		this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');
    
        this.physics.startSystem(Phaser.Physics.ARCADE);
    
        this.stage.backgroundColor = '#787878';
    
        map = this.add.tilemap('level1');
    
        map.addTilesetImage('gbjam3-game-tile-atlas-1', 'tile-atlas-1');
        
        // setCollision, or setCollisionBetween for ranges of tiles
        // map.setCollision(2);
        // map.setCollision(3);
        // map.setCollision(4);
        map.setCollisionBetween(0,255);
        map.setCollisionBetween(4, 11);
        map.setCollisionBetween(36, 40);
        map.setCollisionBetween(68, 71);
        
        layer_back3 = map.createLayer('Background3');
        layer_back2 = map.createLayer('Background2');
        layer_back1 = map.createLayer('Background1');
        layer_mid = map.createLayer('Middleground');
        layer_fore1 = map.createLayer('Foreground1');
        layer_fore2 = map.createLayer('Foreground2');
        layer_fore3 = map.createLayer('Foreground3');
        
        // layer_col = map.createLayer('Collision');
        
        // layer_fore = map.createLayer('Foreground');
    
        //  Un-comment this on to see the collision tiles
        layer_mid.debug = true;
    
        layer_mid.resizeWorld();
        
        player = this.add.sprite(16, 650, 'player');
        
        this.physics.enable(player);
        
        this.physics.arcade.gravity.y = 250;
    
        player.body.bounce.y = 0.2;
        player.body.linearDamping = 1;
        player.body.collideWorldBounds = true;
    
        this.camera.follow(player);
    
        cursors = this.input.keyboard.createCursorKeys();
        
	},

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		
		//this.sea.y += 2;
    
        this.physics.arcade.collide(player, layer_mid);
        
        player.body.velocity.x = 0;
    
        if (cursors.up.isDown)
        {
            if (player.body.onFloor())
            {
                player.body.velocity.y = -200;
            }
        }
    
        if (cursors.left.isDown)
        {
            player.body.velocity.x = -150;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 150;
        }
        
        //map.setTileIndexCallback(2, this.justChecking, this);

	},
	
	render: function () {

		//  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
	    BasicGame.pixel.context.drawImage(this.game.canvas, 0, 0, this.game.width, this.game.height, 0, 0, BasicGame.pixel.width, BasicGame.pixel.height);

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};
