var game = new Phaser.Game(160, 144, Phaser.CANVAS, '');

var pixel = { scale: 4, canvas: null, context: null, width: 0, height: 0 };


function init() {
 
    //  Hide the un-scaled game canvas
    game.canvas.style['display'] = 'none';
 
    //  Create our scaled canvas. It will be the size of the game * whatever scale value you've set
    pixel.canvas = Phaser.Canvas.create(game.width * pixel.scale, game.height * pixel.scale);
 
    //  Store a reference to the Canvas Context
    pixel.context = pixel.canvas.getContext('2d');
 
    //  Add the scaled canvas to the DOM
    Phaser.Canvas.addToDOM(pixel.canvas);
 
    //  Disable smoothing on the scaled canvas
    Phaser.Canvas.setSmoothingEnabled(pixel.context, false);
 
    //  Cache the width/height to avoid looking it up every render
    pixel.width = pixel.canvas.width;
    pixel.height = pixel.canvas.height;
 
}

function preload() {
    game.load.image('pic', 'atestimage.png');
}
 
function create() {
    game.add.image(0, 0, 'pic');
}

function render() {
 
    //  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
    pixel.context.drawImage(game.canvas, 0, 0, game.width, game.height, 0, 0, pixel.width, pixel.height);
 
}


