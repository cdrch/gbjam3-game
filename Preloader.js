
BasicGame.Preloader = function (game) {

};

BasicGame.Preloader.prototype = {

	preload: function () {
		
		//  Testing code for scaling
		this.load.image('testimage', 'kof.png');
		
		//  Show the loading progress bar asset we loaded in boot.js
    this.stage.backgroundColor = '#2d2d2d';


    //  Here we load the rest of the assets our game needs.
    this.load.image('titlepage', 'assets/titlepage.png');
    
    this.load.tilemap('testlevel1', 'assets/testingmap3.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles1', 'assets/4-color-tileset.png');
    this.load.image('testPlayer', 'assets/checkerplayer.png');
    this.load.tilemap('layertest1', 'assets/layertest1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('layertest2', 'assets/layertest2.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('layertest3', 'assets/layertest3.json', null, Phaser.Tilemap.TILED_JSON);
    
    this.load.tilemap('level1', 'assets/level1c.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level2', 'assets/level2_v1_0_0.json', null, Phaser.Tilemap.TILED_JSON);
    // this.load.tilemap('rockmap', 'assets/rockTestMap', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tile-atlas-1', 'assets/gbjam3-game-tile-atlas-1.png');
    this.load.spritesheet('player_sheet', 'assets/faunWalk3.png', 32, 32);
    
    // this.load.image('textBox1', 'assets/TextBox1');
    // this.load.spritesheet('button_sheet', 'assets/button_v2.png', 24, 8);
    
    this.load.audio('pickUpSound', ['assets/Zounds/pickupGet.wav', 'assets/Zounds/pickupGet(1).ogg']);
    this.load.audio('theme', ['assets/Zounds/melodyBegin.wav']);
    this.load.audio('gateFX', ['assets/Zounds/gateFX.wav']);
    
    this.load.spritesheet('grape', 'assets/grape1.png', 8, 8);
    
    this.load.spritesheet('door', 'assets/doorTile2.png', 64, 81);

	},

	create: function () {

	},
	
	update: function () {
		//  You don't actually need to do this, but I find it gives a much smoother game experience.
    //  Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
    //  You can jump right into the menu if you want and still play the music, but you'll have a few
    //  seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
    //  it's best to wait for it to decode here first, then carry on.
    
    //  If you don't have any music in your game then put the game.state.start line into the create function and delete
    //  the update function completely.
    
    //if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
    //{
    //  this.ready = true;
      this.state.start('MainMenu');
    //}
	},

	render: function () {

		//  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
	    BasicGame.pixel.context.drawImage(this.game.canvas, 0, 0, this.game.width, this.game.height, 0, 0, BasicGame.pixel.width, BasicGame.pixel.height);

	},

};
