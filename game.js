BasicGame.Game = function (game) {

};

// Global Variables
var map;
var layer_back;
var layer_col;
var layer_fore;

var player;
var cursors;

BasicGame.Game.prototype = {
  
  create: function () {

    this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');
    
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.stage.backgroundColor = '#787878';

    map = this.add.tilemap('level1');

    map.addTilesetImage('4-color-tileset', 'tiles1');
    
    map.setCollision(2);
    map.setCollision(3);
    map.setCollision(4);
    
    layer_back = map.createLayer('Background');
    
    // layer_col = map.createLayer('Collision');
    
    // layer_fore = map.createLayer('Foreground');

    //  Un-comment this on to see the collision tiles
    // layer_col.debug = true;

    layer_back.resizeWorld();
    
    player = this.add.sprite(16, 16, 'player');
    
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
    
    this.physics.arcade.collide(player, layer_back);
    
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
    // pixel.context.drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, pixel.width, pixel.height);
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
