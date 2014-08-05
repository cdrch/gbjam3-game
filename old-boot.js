var BasicGame = {
  pixel = { scale: 4, canvas: null, context: null, width: 0, height: 0 };
};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {
  
  init: function () {
    //  Hide the un-scaled game canvas
    this.canvas.style['display'] = 'none';
 
    //  Create our scaled canvas. It will be the size of the game * whatever scale value you've set
    this.pixel.canvas = Phaser.Canvas.create(this.width * this.pixel.scale, this.height * this.pixel.scale);
 
    //  Store a reference to the Canvas Context
    this.pixel.context = this.pixel.canvas.getContext('2d');
 
    //  Add the scaled canvas to the DOM
    Phaser.Canvas.addToDOM(this.pixel.canvas);
 
    //  Disable smoothing on the scaled canvas
    Phaser.Canvas.setSmoothingEnabled(this.pixel.context, false);
 
    //  Cache the width/height to avoid looking it up every render
    this.pixel.width = this.pixel.canvas.width;
    this.pixel.height = this.pixel.canvas.height;
  },

  preload: function () {

    //  Here we load the assets required for our preloader (in this case a loading bar)
    this.load.image('preloaderBar', 'assets/preloader-bar.png');

  },

  create: function () {

    //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
    this.input.maxPointers = 1;

    //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
    this.stage.disableVisibilityChange = true;

    // if (this.game.device.desktop) {
    //   //  If you have any desktop specific settings, they can go in here
    //   this.scale.pageAlignHorizontally = true;
    // } else {
    //   //  Same goes for mobile settings.
    //   //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
    //   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //   this.scale.minWidth = 480;
    //   this.scale.minHeight = 260;
    //   this.scale.maxWidth = 1024;
    //   this.scale.maxHeight = 768;
    //   this.scale.forceLandscape = true;
    //   this.scale.pageAlignHorizontally = true;
    //   this.scale.setScreenSize(true);
    // }

    //  By this point the preloader assets have loaded to the cache, we've set the game settings
    //  So now let's start the real preloader going
    this.state.start('Preloader');

  },
  
  render: function () {
    //  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
    this.pixel.context.drawImage(this.canvas, 0, 0, this.width, this.height, 0, 0, this.pixel.width, this.pixel.height);
  }

};
