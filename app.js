window.onload = function() {

  //  Create your Phaser game and inject it into the gameContainer div.
  //  We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
  var game = new Phaser.Game(160, 144, Phaser.CANVAS, 'gameContainer');
  
  // var pixel = { scale: 4, canvas: null, context: null, width: 0, height: 0 }

  //  Add the States your game has.
  //  You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
  game.state.add('Boot', BasicGame.Boot);
  game.state.add('Preloader', BasicGame.Preloader);
  game.state.add('MainMenu', BasicGame.MainMenu);
  game.state.add('Game', BasicGame.Game);
  
  // Scaling stuff
  
  // //  Hide the un-scaled game canvas
  // game.canvas.style['display'] = 'none';

  // //  Create our scaled canvas. It will be the size of the game * whatever scale value you've set
  // pixel.canvas = Phaser.Canvas.create(160 * 3, 144 * 3);

  // //  Store a reference to the Canvas Context
  // pixel.context = pixel.canvas.getContext('2d');

  // //  Add the scaled canvas to the DOM
  // Phaser.Canvas.addToDOM(pixel.canvas);

  // //  Disable smoothing on the scaled canvas
  // Phaser.Canvas.setSmoothingEnabled(pixel.context, false);

  // //  Cache the width/height to avoid looking it up every render
  // pixel.width = pixel.canvas.width;
  // pixel.height = pixel.canvas.height;

  //  Now start the Boot state.
  game.state.start('Boot');

};
