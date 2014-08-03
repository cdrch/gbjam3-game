BasicGame.Game = function (game) {

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
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
    
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
  
  justChecking: function () {
    this.state.start('MainMenu');
  },
  
  render: function () {
  //  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
    this.pixel.context.drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, this.pixel.width, this.pixel.height);
    this.game.debug.body(player);
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};