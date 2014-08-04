{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":7},"end":{"row":15,"column":8}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":8},"end":{"row":15,"column":9}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":9},"end":{"row":15,"column":10}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":10},"end":{"row":15,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":11},"end":{"row":15,"column":12}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":12},"end":{"row":15,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":13},"end":{"row":15,"column":14}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":14},"end":{"row":15,"column":15}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":15},"end":{"row":15,"column":16}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":16},"end":{"row":15,"column":17}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":17},"end":{"row":15,"column":18}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":18},"end":{"row":16,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":2},"end":{"row":17,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":36}},"text":"//  Hide the un-scaled game canvas"},{"action":"insertText","range":{"start":{"row":17,"column":36},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":18,"column":0},"end":{"row":34,"column":0}},"lines":["    this.canvas.style['display'] = 'none';"," ","    //  Create our scaled canvas. It will be the size of the game * whatever scale value you've set","    pixel.canvas = Phaser.Canvas.create(160 * 3, 144 * 3);"," ","    //  Store a reference to the Canvas Context","    pixel.context = pixel.canvas.getContext('2d');"," ","    //  Add the scaled canvas to the DOM","    Phaser.Canvas.addToDOM(pixel.canvas);"," ","    //  Disable smoothing on the scaled canvas","    Phaser.Canvas.setSmoothingEnabled(pixel.context, false);"," ","    //  Cache the width/height to avoid looking it up every render","    pixel.width = pixel.canvas.width;"]},{"action":"insertText","range":{"start":{"row":34,"column":0},"end":{"row":34,"column":39}},"text":"    pixel.height = pixel.canvas.height;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":4},"end":{"row":18,"column":8}},"text":"this"},{"action":"insertText","range":{"start":{"row":18,"column":4},"end":{"row":18,"column":5}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":5},"end":{"row":18,"column":6}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":6},"end":{"row":18,"column":7}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":7},"end":{"row":18,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":1}},"text":" "},{"action":"removeText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":2}},"text":"  "},{"action":"removeText","range":{"start":{"row":34,"column":0},"end":{"row":34,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":3},"end":{"row":18,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":3},"end":{"row":18,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":2},"end":{"row":6,"column":5}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":2},"end":{"row":17,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":18,"column":2},"end":{"row":18,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":20,"column":2},"end":{"row":20,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":21,"column":2},"end":{"row":21,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":23,"column":2},"end":{"row":23,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":24,"column":2},"end":{"row":24,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":26,"column":2},"end":{"row":26,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":27,"column":2},"end":{"row":27,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":29,"column":2},"end":{"row":29,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":30,"column":2},"end":{"row":30,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":32,"column":2},"end":{"row":32,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":33,"column":2},"end":{"row":33,"column":5}},"text":"// "},{"action":"insertText","range":{"start":{"row":34,"column":2},"end":{"row":34,"column":5}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":3},"end":{"row":6,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":2},"end":{"row":6,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":76},"end":{"row":6,"column":77}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":77},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":2},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":3}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":3},"end":{"row":8,"column":4}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":4},"end":{"row":8,"column":5}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":5},"end":{"row":8,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":6},"end":{"row":8,"column":7}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":7},"end":{"row":8,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":9}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":9}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":7},"end":{"row":8,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":7},"end":{"row":8,"column":8}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":9}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":9},"end":{"row":8,"column":10}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":10},"end":{"row":8,"column":12}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":11},"end":{"row":8,"column":12}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":12},"end":{"row":8,"column":13}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":13},"end":{"row":8,"column":14}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":14},"end":{"row":8,"column":15}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":14},"end":{"row":8,"column":15}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":14},"end":{"row":8,"column":15}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":15},"end":{"row":8,"column":16}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":17},"end":{"row":8,"column":18}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":5}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":5}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":18}},"text":"game.add(pixel);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":3},"end":{"row":6,"column":4}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":2},"end":{"row":6,"column":3}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":2},"end":{"row":6,"column":3}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":2},"end":{"row":6,"column":3}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":3},"end":{"row":6,"column":4}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":5},"end":{"row":6,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":7}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":9,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":[""]},{"action":"removeText","range":{"start":{"row":8,"column":2},"end":{"row":9,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":2},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":2},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":2},"end":{"row":6,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":3},"end":{"row":6,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":5},"end":{"row":6,"column":6}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":7},"end":{"row":6,"column":8}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":8},"end":{"row":6,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":9},"end":{"row":6,"column":10}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":10},"end":{"row":6,"column":11}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":11},"end":{"row":6,"column":12}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":12},"end":{"row":6,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":13},"end":{"row":6,"column":14}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":14},"end":{"row":6,"column":15}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":15},"end":{"row":6,"column":16}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":16},"end":{"row":6,"column":17}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":17},"end":{"row":6,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":18},"end":{"row":6,"column":19}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":19},"end":{"row":6,"column":20}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":20},"end":{"row":6,"column":21}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":21},"end":{"row":6,"column":22}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":22},"end":{"row":6,"column":23}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":23},"end":{"row":6,"column":24}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":24},"end":{"row":6,"column":25}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":0},"end":{"row":35,"column":40}},"text":"  // pixel.height = pixel.canvas.height;"},{"action":"removeLines","range":{"start":{"row":16,"column":0},"end":{"row":35,"column":0}},"nl":"\n","lines":["  // Scaling stuff","  ","  // //  Hide the un-scaled game canvas","  // game.canvas.style['display'] = 'none';","","  // //  Create our scaled canvas. It will be the size of the game * whatever scale value you've set","  // pixel.canvas = Phaser.Canvas.create(160 * 3, 144 * 3);","","  // //  Store a reference to the Canvas Context","  // pixel.context = pixel.canvas.getContext('2d');","","  // //  Add the scaled canvas to the DOM","  // Phaser.Canvas.addToDOM(pixel.canvas);","","  // //  Disable smoothing on the scaled canvas","  // Phaser.Canvas.setSmoothingEnabled(pixel.context, false);","","  // //  Cache the width/height to avoid looking it up every render","  // pixel.width = pixel.canvas.width;"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":2},"end":{"row":16,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":41},"end":{"row":15,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":69},"end":{"row":4,"column":70}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":70},"end":{"row":4,"column":71}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":69},"end":{"row":4,"column":70}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":69},"end":{"row":4,"column":70}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":55},"end":{"row":4,"column":68}},"text":"gameContainer"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":32},"end":{"row":10,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":24,"mode":"ace/mode/javascript"}},"timestamp":1407181779073,"hash":"bac199b37466439f050d2da2c07c88ebacb5f1cf"}