
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
var collision_layer;
var foreground_layer;

var fG;

// var p;
var cursors;

// Global Statics

BasicGame.Game.prototype = {

	create: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		
		this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');
    
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#787878';

    map = this.add.tilemap('layertest2');

    map.addTilesetImage('gbjam3-game-tile-atlas-1', 'tile-atlas-1');
    
    // setCollision, or setCollisionBetween for ranges of tiles
    // map.setCollision(2);
    // map.setCollision(3);
    // map.setCollision(4);
    // map.setCollisionBetween(0,255);
    // map.setCollisionBetween(4, 11);
    // map.setCollisionBetween(36, 40);
    // map.setCollisionBetween(68, 71);
    
    map.setCollisionBetween(4, 11);
    map.setCollisionBetween(36, 40);
    map.setCollisionBetween(68, 71);
    collision_layer = map.createLayer('Tile Layer 1');
    this.player = this.add.sprite(16, 650, 'player');

    //  Un-comment this on to see the collision tiles
    // collision_layer.debug = true;

    collision_layer.resizeWorld();
    
    
    this.game.physics.enable(this.player);
    
    this.physics.arcade.gravity.y = 250;

    this.player.body.bounce.y = 0.2;
    this.player.body.linearDamping = 1;
    this.player.body.collideWorldBounds = true;

    this.camera.follow(this.player);
    
    this.game.physics.enable(this.player);
    
    this.physics.arcade.gravity.y = 250;

    this.player.body.bounce.y = 0.2;
    this.player.body.linearDamping = 1;
    this.player.body.collideWorldBounds = true;

    cursors = this.input.keyboard.createCursorKeys();
    
    this.foeGroup = this.add.group();
    
    
    
    this.foeGroup.enableBody = true;
    this.foeGroup.physicsBodyType = Phaser.Physics.ARCADE;
    
    // The foreground tile laye
    foreground_layer = map.createLayer('Tile Layer 2');
    
    for (var i = 0; i < 16; i++)
    {
      //  This creates a new Phaser.Sprite instance within the group
      //  It will be randomly placed within the world and use the 'baddie' image to display
      var x = this.foeGroup.create(10 + i * 20, 560, 'player');
      x.body.gravity.y = 200;
      x.body.collideWorldBounds = true;
    }
    
    fG = this.foeGroup;
    
        
	},

	update: function () {

  		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
  		
  		//this.sea.y += 2;
    
      
      
      this.game.physics.arcade.collide(this.player, collision_layer);
      this.game.physics.arcade.collide(this.foeGroup, collision_layer);
      this.game.physics.arcade.collide(this.player, this.foeGroup);
      this.game.physics.arcade.collide(this.foeGroup, this.foeGroup);
      
      this.player.body.velocity.x = 0;
  
      if (cursors.up.isDown)
      {
          if (this.player.body.onFloor())
          {
              this.player.body.velocity.y = -200;
          }
      }
  
      if (cursors.left.isDown)
      {
          this.player.body.velocity.x = -150;
      }
      else if (cursors.right.isDown)
      {
          this.player.body.velocity.x = 150;
      }
      
      //map.setTileIndexCallback(2, this.quitGame, this);

	},
	
	CollisionD: function(obj1, obj2) {

    alert('collision!');
    this.state.start('MainMenu');
    
  },
	
	render: function () {

		//  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
	   // this.debug.bodyInfo(p, 32, 120);
	   this.game.debug.body(this.player);
	   BasicGame.pixel.context.drawImage(this.game.canvas, 0, 0, this.game.width, this.game.height, 0, 0, BasicGame.pixel.width, BasicGame.pixel.height);

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};
