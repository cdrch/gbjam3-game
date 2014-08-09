
BasicGame.LevelSwitcher = function (game) {

};

// Global Variables
var map;
var collision_layer;
var foreground_layer;
var starting_player_facing;

var fG;

// var p;
var cursors;

// Global Statics

var COLLISION_LAYER_NAME = 'Collision';
var FOREGROUND_LAYER_NAME = 'Foreground';

BasicGame.LevelSwitcher.prototype = {

	create: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		
		
		this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');

  //   cursors = this.input.keyboard.createCursorKeys();
  
    BasicGame.gameInfo.currentLevel++;
    
    
	},

	update: function () {

  		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
  		
      // this.processInput();
      
      // this.sea.y += 1;
      if (BasicGame.gameInfo.currentLevel > BasicGame.gameInfo.lastLevel)
      {
        BasicGame.gameInfo.currentLevel = 0;
        this.state.start('MainMenu');
      } else {
        this.state.start('Game');
      }
      
      // if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
	     // this.game.state.start('Level', this.levelList[this.currentLevel]);
	       
	   // }
      
	},
	
	//  Create-related functions
	
	//  Update-related functions
	
	processInput: function () {
	 // this.player.body.velocity.x = 0;
	  
	 // if (this.player.body.onFloor() === false)
	 // {
	 //   if (this.player.facing === 'left')
  //     {
  //       this.player.animations.play('jump_left');
  //     }
  //     else
  //     {
  //       this.player.animations.play('jump_right');
  //     }
	 // }
  
  //   if (cursors.up.isDown)
  //   {
  //     if (this.player.body.onFloor())
  //     {
  //         this.player.body.velocity.y = -200;
  //     }
  //   }

  //   if (cursors.left.isDown)
  //   {
  //     this.player.facing = 'left';
  //     this.player.body.velocity.x = -150;
  //     this.player.animations.play('walk_left');
  //   }
  //   else if (cursors.right.isDown)
  //   {
  //     this.player.facing = 'right';
  //     this.player.body.velocity.x = 150;
  //     this.player.animations.play('walk_right');
  //   }
  //   else
  //   {
  //     if (this.player.facing === 'left')
  //     {
  //       this.player.animations.play('face_left');
  //     }
  //     else
  //     {
  //       this.player.animations.play('face_right');
  //     }
  //   }
    
    if (this.input.keyboard.isDown(Phaser.Keyboard.X)) 
    {
      this.displayText();
    }
	},
	
	displayText: function () {
	 // var textBox = new Rectangle(0, 120, 160, 24);
	  var currentText = this.add.text(10, 120, "click and drag me", { font: "8px Arial", fill: "#000000", align: "center" });
	  currentText.fixedToCamera = true;
	},
	
	//  Level-switching functions
	
	goToLevel: function () {
	  
	},
	
	render: function () {

		//  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
	   // this.debug.bodyInfo(p, 32, 120);
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
