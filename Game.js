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
    
    // this.game.playerX = 100;
    // this.game.playerY = 100;

};

// Global Variables
var map;
var collision_layer;
var foreground_layer;
var starting_player_facing;

var fG;

var triggeredButtons = [];
var currentLevel = 0;
var levelButtonOrder = [];

var grav;

// var p;
var cursors;
var currentText;

// Global Statics

var COLLISION_LAYER_NAME = 'Collision';
var FOREGROUND_LAYER_NAME = 'Foreground';

BasicGame.Game.prototype = {

	create: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		
		currentLevel = BasicGame.gameInfo.currentLevel;
		levelButtonOrder = BasicGame.gameInfo.levelButtonOrder[currentLevel];
		
		this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');
    
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#787878';

    map = this.add.tilemap(BasicGame.gameInfo.levelList[BasicGame.gameInfo.currentLevel]);

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
    
    collision_layer = map.createLayer(COLLISION_LAYER_NAME);
    
    collision_layer.resizeWorld();
    //  Un-comment this on to see the collision tiles
    // collision_layer.debug = true;
    
    
    // this.game.physics.enable(this.button)
    
    this.buttons = this.add.group();
    
    this.buttons.enableBody = true;
    this.buttons.physicsBodyType = Phaser.Physics.ARCADE;
    
    
    this.createButtons();
    this.buttons.callAll('animations.add', 'animations', 'up', [0], 60, false);
    this.buttons.callAll('animations.add', 'animations', 'down', [1], 60, false);
    
    
    
    // this.buttons.setAll('gravity.y', 0); not working
    
    
    this.player = this.add.sprite(BasicGame.playerInfo.playerX, BasicGame.playerInfo.playerY, 'player_sheet');

    this.player.animations.add('walk_left', [4, 5, 6, 7], 9, true);
    this.player.animations.add('walk_right', [0, 1, 2, 3], 9, true);
    this.player.animations.add('face_left', [7], 9, true);
    this.player.animations.add('face_right', [3], 9, true);
    this.player.animations.add('jump_left', [9], 9, true);
    this.player.animations.add('jump_right', [8], 9, true);
    
    this.game.physics.enable(this.player);
    
    this.player.anchor.setTo(0.5, 0.5);
    this.player.body.setSize(22, 31, 0, 1);
    
    this.physics.arcade.gravity.y = 1000;

    this.player.body.bounce.y = 0.0;
    this.player.body.linearDamping = 1;
    this.player.body.collideWorldBounds = true;
    

    this.camera.follow(this.player);
    
    this.player.facing = starting_player_facing;

    cursors = this.input.keyboard.createCursorKeys();
    
    // this.createTestBoxes();
    
    // The foreground tile laye
    foreground_layer = map.createLayer(FOREGROUND_LAYER_NAME);
        
      // map.setTileIndexCallback(32, this.quitGame, this);
      
      grav = this.physics.arcade.gravity;
	},

	update: function () {

  		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
  		
  		//this.sea.y += 2;
    
      this.checkCollision();
      this.processInput();
      
      this.buttons.forEach(function (b) {
        if(b.down === false)
        {
          b.animations.play('up');
        }
        else
        {
          b.animations.play('down');
        }
      });
      
      // if(this.button1.down === false)
      // {
      //   this.button1.animations.play('up');
      // }
      // else
      // {
      //   this.button1.animations.play('down');
      // }
	},
	
	//  Create-related functions
	createButtons: function () {
	  this.button1 = this.add.sprite(760, 768, 'button_sheet');
    this.button1.down = false;
    this.button1.key = 1;
    this.buttons.add(this.button1);
    this.button1.body.setSize(20, 7, 2, 1);
    
    this.button2 = this.add.sprite(600, 768, 'button_sheet');
    this.button2.down = false;
    this.button2.key = 2;
    this.buttons.add(this.button2);
    this.button2.body.setSize(20, 7, 2, 1);
	},
	
	createTestBoxes: function() {
	  this.foeGroup = this.add.group();
    
    this.foeGroup.enableBody = true;
    this.foeGroup.physicsBodyType = Phaser.Physics.ARCADE;
    
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
	
	//  Update-related functions
	
	processInput: function () {
	  this.player.body.velocity.x = 0;
	  
	  if (this.player.body.onFloor() === false)
	  {
	    if (this.player.facing === 'left')
      {
        this.player.animations.play('jump_left');
      }
      else
      {
        this.player.animations.play('jump_right');
      }
	  }
  
    if (cursors.up.isDown)
    {
      if (this.player.body.onFloor())
      {
          this.player.body.velocity.y = -200;
      }
    }

    if (cursors.left.isDown)
    {
      this.player.facing = 'left';
      this.player.body.velocity.x = -150;
      this.player.animations.play('walk_left');
    }
    else if (cursors.right.isDown)
    {
      this.player.facing = 'right';
      this.player.body.velocity.x = 150;
      this.player.animations.play('walk_right');
    }
    else
    {
      if (this.player.facing === 'left')
      {
        this.player.animations.play('face_left');
      }
      else
      {
        this.player.animations.play('face_right');
      }
    }
    
    if (this.input.keyboard.isDown(Phaser.Keyboard.X)) 
    {
      this.showTileText();
    }
    
    if (this.input.keyboard.isDown(Phaser.Keyboard.C)) 
    {
      this.displayText();
    }
    
    if (this.input.keyboard.isDown(Phaser.Keyboard.L)) 
    {
      this.goToLevel();
    }
    
    if (this.input.keyboard.isDown(Phaser.Keyboard.B))
    {
      this.buttons.forEach(function (b) {
        b.down = false;
      });
    }
	},
	
	checkCollision: function () {
	  this.game.physics.arcade.collide(this.player, collision_layer);
    // this.game.physics.arcade.collide(this.foeGroup, collision_layer);
    this.game.physics.arcade.collide(this.player, this.foeGroup);
    // this.game.physics.arcade.collide(this.foeGroup, this.foeGroup);
    this.game.physics.arcade.overlap(this.player, this.buttons, this.buttonCheck);
    this.game.physics.arcade.collide(this.buttons, collision_layer);
    
	},
	
	buttonCheck: function (p, b) {
	  triggeredButtons.push(b.key);
	  var reset = false;
	  for (var i = 0; i < triggeredButtons.length; i++)
	  {
	    
	    if(triggeredButtons[i] == levelButtonOrder[i])
	    {
	      // Nothing happens; the puzzle is going well!
	     // this.state.start('MainMenu');
	     
	     //this.debug.text('p', 10, 10);
	     if (triggeredButtons.length >= 200)
	     {
	       grav.y = 50;
	     }
	    }
	    else
	    {
	      reset = true;
	    }
	  }
	  
	  b.down = true;
	},
	
	isButtonInOrder: function (b) {
	  
	},
	
	showTileText: function () {
	 // var textBox = new Rectangle(0, 120, 160, 24);
	 //currentText.destroy();
	  currentText = this.add.text(10, 120, 'Hello!', { font: "8px Arial", fill: "#000000", align: "center" });
	  currentText.fixedToCamera = true;
	},
	
	displayText: function () {
	 // var textBox = new Rectangle(0, 120, 160, 24);
	 
	  currentText = this.add.text(10, 120, BasicGame.gameInfo.levelPhrase[BasicGame.gameInfo.currentLevel], { font: "8px Arial", fill: "#000000", align: "center" });
	  currentText.fixedToCamera = true;
	},
	
	clearText: function () {
	  currentText = '';
	},
	
	// Puzzle functions
	
	pressButton: function (hit_button) {
	  hit_button.animations.play('down');
	},
	
	//  Level-switching functions
	
	goToLevel: function () {
	  BasicGame.playerInfo.playerX = 100;
	  BasicGame.playerInfo.playerY = 650;
	  this.state.start('LevelSwitcher');
	},
	
	render: function () {

		//  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
	   // this.debug.bodyInfo(p, 32, 120);
	   //this.game.debug.body(this.button1);
	   //this.game.debug.body(this.player);
	   BasicGame.pixel.context.drawImage(this.game.canvas, 0, 0, this.game.width, this.game.height, 0, 0, BasicGame.pixel.width, BasicGame.pixel.height);

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};
