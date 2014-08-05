
BasicGame.MainMenu = function (game) {
	// this.music = null;
 // 	this.playButton = null;
};

BasicGame.MainMenu.prototype = {

	create: function () {
		// this.add.sprite(0, 0, 'titlepage');
        this.loadingText = this.add.text(80, 72, "Press Z or tap/click game to start", { font: "6px monospace", fill: "#fff" });
	    this.loadingText.anchor.setTo(0.5, 0.5);
	},

	update: function () {

		if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
	      this.startGame();
	    }
	    //  Do some nice funky main menu effect here
	    
		// this.picthing.y += 1;
	},

	render: function () {

		//  Every loop we need to render the un-scaled game canvas to the displayed scaled canvas:
	    BasicGame.pixel.context.drawImage(this.game.canvas, 0, 0, this.game.width, this.game.height, 0, 0, BasicGame.pixel.width, BasicGame.pixel.height);

	},

	startGame: function (pointer) {

		//	And start the actual game
		this.state.start('Game');

	}

};
